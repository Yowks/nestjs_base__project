import { Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('categories')
export class Category {
   @PrimaryGeneratedColumn()
   id: number;

   @Column({unique:true})
   index: number;

   @Column()
   label: string;

   @Column()
   description: string;

   @CreateDateColumn()
   created_at : Date;

   @UpdateDateColumn()
   updated_at : Date;
}