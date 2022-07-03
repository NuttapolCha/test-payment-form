import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from './config/config';
import { Customer } from './db/sql/entities/customer.entity';
import { Order } from './db/sql/entities/order.entity';
import { Coupon } from './db/sql/entities/coupon.entity';
import { MailModule } from './mail/mail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config.dbConfig),
    TypeOrmModule.forFeature([Customer, Order, Coupon]),
    MailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
