import { Entity,Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
   @PrimaryGeneratedColumn()
   id: number;

   @Column()
   name: string;

   @Column()
   email: string;

   @Column()
   password_hash: string;

   @CreateDateColumn()
   created_at : Date;

   @UpdateDateColumn()
   updated_at : Date;
}