import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from './cart.entity';
import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
