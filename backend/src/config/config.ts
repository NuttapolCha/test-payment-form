import { Coupon } from 'src/entities/coupon.entity';
import { Customer } from 'src/entities/customer.entity';
import { Order } from 'src/entities/order.entity';
import { DataSourceOptions } from 'typeorm';

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

const config = {
  dbConfig,
};

export default config;
