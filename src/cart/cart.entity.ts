import { User } from 'src/authentication/model/user.entity'
import { Product } from 'src/product/model/product.entity'
import { Entity, ManyToOne, JoinColumn, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'

@Entity()
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    order_number: number;

    @OneToOne(() => Product)
    product: Product;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @ManyToOne(()=>User)
    user: User;
}
