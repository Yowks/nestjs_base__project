import { Category } from 'src/category/model/category.entity';
import { Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'

@Entity('products')
export class Product {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   label: string;

   @Column()
   description: string;

   @Column('int')
   price: number;

   @ManyToOne(type => Category, category => category.id)
   @JoinColumn()
   category_id: number;

   @Column()
   thumbnail_url: string;

   @Column({default: true})
   visible_public : boolean;

   @Column({default: true})
   visible_authenticated: boolean;

   @CreateDateColumn()
   created_at : Date;

   @UpdateDateColumn()
   updated_at : Date;
}