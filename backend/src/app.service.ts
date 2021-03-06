import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubmitFormParams } from './dto';
import { Coupon } from './db/sql/entities/coupon.entity';
import { Customer } from './db/sql/entities/customer.entity';
import { Order } from './db/sql/entities/order.entity';
import { validate } from './utils/validate';
import { MailService } from './mail/mail.service';
import { SendEmailParams } from './mail/email_params';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,

    @InjectRepository(Order)
    private orderRepository: Repository<Order>,

    @InjectRepository(Coupon)
    private couponRepository: Repository<Coupon>,

    private mailService: MailService,
  ) {}

  // getCustomer get customer from DB if exist otherwise will create a new one.
  // This will use every column as a key.
  //
  // In real application, we might force custoemr to logged in and
  // access out service with customer ID instead.
  private async getCustomer(customer: Customer): Promise<Customer> {
    let existing = await this.customerRepository.findOneBy({
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phoneNo: customer.phoneNo,
    });

    if (!existing) {
      existing = await this.customerRepository.save(customer);
    }
    return existing;
  }

  private async createOrder(order: Order): Promise<Order> {
    return await this.orderRepository.save(order);
  }

  private async sendEReceiptEmail(params: SendEmailParams): Promise<boolean> {
    await this.mailService.sendEReceipt(params);
    return true;
  }

  // findCoupon find coupon in our DB.
  private async findCoupon(code: string): Promise<Coupon> {
    if (!code) {
      throw new Error('invalid findCoupon parameter input');
    }
    return await this.couponRepository.findOneBy({ code });
  }

  async getDiscount(code: string): Promise<number> {
    try {
      const coupon = await this.findCoupon(code);
      if (!coupon || !coupon.isActive) {
        throw new Error('customer has entered an invalid coupon code');
      }
      return coupon.discount;
    } catch (err) {
      console.log('error find coupon:', err);
      return -1;
    }
  }

  // submitForm converts customer check out input form
  // into an order record which will be inserted into our DB.
  async submitForm(params: SubmitFormParams): Promise<string> {
    // validate email
    if (!validate.emailIsValid(params.email)) {
      return 'invalid email input';
    }
    if (
      params.recommenderEmail &&
      !validate.emailIsValid(params.recommenderEmail)
    ) {
      return 'invalid recommender email input';
    }

    // check if customer entered a valid coupon code
    let coupon = new Coupon();
    if (params.couponCode) {
      try {
        coupon = await this.findCoupon(params.couponCode);
        if (!coupon || !coupon.isActive) {
          throw new Error('customer has entered an invalid coupon code');
        }
      } catch (err) {
        console.log('find coupon error:', err);
        return 'find coupon error';
      }
    }

    let customer = new Customer();
    customer.firstName = params.firstName;
    customer.lastName = params.lastName;
    customer.email = params.email;
    customer.phoneNo = params.phoneNo;
    try {
      customer = await this.getCustomer(customer);
    } catch (err) {
      console.log('get customer error:', err);
      return 'get customer error';
    }

    // Create a new order record.
    let order = new Order();
    try {
      order.customer = new Customer();
      order.customer.id = customer.id;

      order.coupon = new Coupon();
      order.coupon.code = coupon ? coupon.code : '';

      order.recommenderEmail = params.recommenderEmail;

      order = await this.createOrder(order);
    } catch (err) {
      console.log('create order error:', err);
      return 'create order error';
    }

    // Send E-Receipt via email
    // try {
    //   await this.sendEReceiptEmail({
    //     to: params.email,
    //     name: params.firstName + ' ' + params.lastName,
    //     date: order.createdDate,
    //     amount: 5000 - coupon.discount,
    //     discount: coupon.discount,
    //     recommenderEmail: params.recommenderEmail,
    //   });
    // } catch (err) {
    //   console.log('send email error:', err);
    //   return 'send email error';
    // }

    // if everything okay, return empty string.
    return '';
  }
}
