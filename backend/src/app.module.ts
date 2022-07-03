import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/config';
import { Customer } from './entities/customer.entity';
import { Order } from './entities/order.entity';
import { Coupon } from './entities/coupon.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.dbConfig),
    TypeOrmModule.forFeature([Customer, Order, Coupon]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
