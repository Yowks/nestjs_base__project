import { Controller, Post, Get,Request, Delete, Body, UseGuards } from '@nestjs/common';
import { CartService } from '../service/cart.service';
import { Cart } from '../cart.entity';
import { JwtAuthGuard } from 'src/authentication/jwt-auth.guard';

@Controller('api/v1/cart')
export class CartController {
    constructor(private cartService: CartService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    async AddToCart(@Body() body, @Request() req): Promise<void> {
        const { product_id, quantity, order_number } = body
        return await this.cartService.addToCart(parseInt(product_id), parseInt(quantity), req.user.username, parseInt(order_number));
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    async getItemsInCart(@Request() req, @Body() body): Promise<Cart[]> {
        const order_number = body
        return await this.cartService.getItemsInCart(req.user.username, parseInt(order_number));
    }
}

