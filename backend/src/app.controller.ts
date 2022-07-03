import { Body, Controller, Header, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { CommonResponse, SubmitFormParams } from './dto';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('submitForm')
  @Header('Content-type', 'application/json')
  async submitForm(@Body() params: SubmitFormParams, @Res() res: Response) {
    const errMsg = await this.appService.submitForm(params);
    const resp = new CommonResponse();
    resp.code = errMsg ? 1 : 0;
    resp.message = errMsg ? errMsg : 'success';
    if (resp.code == 1) {
      res.status(500);
    }
    res.json(resp);
  }
}
