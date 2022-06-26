import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../cart.entity';
import { ProductService } from 'src/product/service/product.service';
import { AuthenticationService } from 'src/authentication/service/authentication.service';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cart_repository: Repository<Cart>,
    private product_service: ProductService,
    private user_service: AuthenticationService,
  ) { }

  async addToCart(product_id: number, quantity: number, user_name: string, order_number: number): Promise<any> {
    const cart_items = await this.cart_repository.find(
      {
        relations: ["product"]
      }
    );
    const product = await this.product_service.getOne(product_id);
    if (product) {
      //confirm if item is exists in the cart
      const cart = cart_items.filter(
        (item) => item.product.id === product_id && item.user.name === user_name && item.order_number == order_number,
      );
      if (cart.length < 1) {
        const new_cart = {
          product_id: product.id,
          price: product.price,
          quantity,
          total: product.price * quantity,
          user: {name: user_name}
        }
        return await this.cart_repository.save(new_cart)
      } else {
        //Update the item quantity
        const quantity = cart[0].quantity += 1;
        const price = cart[0].price * quantity;

        return await this.cart_repository.update(cart[0].id, { quantity, price });
      }
    }
    return null;
  }
  async getItemsInCart(user_name: string, order_number: number): Promise<Cart[]> {
    const userCart = this.cart_repository.find(
      {
        relations: ['user'],
        where: {
          order_number: order_number
        }
      }
    );
    return (await userCart).filter(item => item.user.name === user_name)
  }
}
