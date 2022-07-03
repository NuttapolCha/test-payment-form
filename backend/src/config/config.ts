import { MailerOptions } from '@nestjs-modules/mailer';
import { Coupon } from 'src/db/sql/entities/coupon.entity';
import { Customer } from 'src/db/sql/entities/customer.entity';
import { Order } from 'src/db/sql/entities/order.entity';
import { DataSourceOptions } from 'typeorm';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

const dbConfig = <DataSourceOptions>{
  // TODO: read this hard code from .env instead.
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'dbtest',
  logging: true,
  entities: [Coupon, Customer, Order],
  migrations: [],
  synchronize: true,
  schema: 'test_payment_form',
};

const mailConfig = <MailerOptions>{
  transport: {
    host: 'smtp.example.com',
    secure: false,
    auth: {
      user: 'user@example.com',
      pass: 'topsecret',
    },
  },
  defaults: {
    from: '"No Reply" <noreply@example.com>',
  },
  template: {
    dir: join(__dirname, '../mail/templates'),
    adapter: new HandlebarsAdapter(),
    options: {
      strict: true,
    },
  },
};

const config = {
  dbConfig,
  mailConfig,
};

export default config;
