import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Order } from './order.entity';

@Entity('coupons')
export class Coupon {
  @PrimaryColumn()
  code: string;

  @Column()
  discount: number;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Order, (order) => order.coupon)
  orders: Order[];
}
