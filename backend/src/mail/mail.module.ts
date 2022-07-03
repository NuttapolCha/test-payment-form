import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import config from '../config/config';

@Module({
  imports: [MailerModule.forRoot(config.mailConfig)],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
