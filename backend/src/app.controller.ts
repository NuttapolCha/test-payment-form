import { Body, Controller, Header, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonResponse, SubmitFormParams } from './dto';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('submitForm')
  @Header('Content-type', 'application/json')
  submitForm(@Body() params: SubmitFormParams, @Res() res: Response) {
    const errMsg = this.appService.submitForm(params);
    const resp = new CommonResponse();
    resp.code = errMsg ? 0 : 1;
    resp.message = errMsg ? errMsg : 'success';
    res.json(resp);
  }
}
