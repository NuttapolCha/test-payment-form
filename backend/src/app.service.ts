import { Injectable } from '@nestjs/common';
import { SubmitFormParams } from './dto';

@Injectable()
export class AppService {
  submitForm(params: SubmitFormParams): string {
    console.log(
      // TODO: save form to DB logic place here
      `form submitted: name = ${params.firstName}, email = ${params.email}`,
    );
    return '';
  }
}
