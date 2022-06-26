import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { ProductModule } from 'src/product/product.module';
import { Cart } from './cart.entity';
import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cart]),
    AuthenticationModule,
    ProductModule
  ],
  controllers: [CartController],
  providers: [CartService]
})
export class CartModule {}
