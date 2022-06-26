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

   @Column({nullable: true})
   thumbnail_url: string;

   @Column('tinyint',{default: 1})
   visible_public : number;

   @Column('tinyint',{default: 1})
   visible_authenticated: number;

   @CreateDateColumn()
   created_at : Date;

   @UpdateDateColumn()
   updated_at : Date;
}