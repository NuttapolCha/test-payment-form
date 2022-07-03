import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailParams } from './email_params';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendEReceipt(params: SendEmailParams) {
    await this.mailerService.sendMail({
      to: params.to,
      from: 'no_reply@testpaymentform.com',
      subject: 'Your Annual Subscription E-Receipt',
      template: './e_receipt',
      context: {
        name: params.name,
        date: params.date,
        amount: params.amount,
        discount: params.discount,
        recommenderEmail: params.recommenderEmail,
      },
    });
  }
}
