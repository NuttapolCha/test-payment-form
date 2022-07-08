import {
  Body,
  Controller,
  Get,
  Header,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CommonResponse, SubmitFormParams } from './dto';
import { Response } from 'express';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('coupons/:code')
  @Header('Content-type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  async findCoupon(@Param() params, @Res() res: Response) {
    const resp = new CommonResponse();
    const discount = await this.appService.getDiscount(params.code);
    if (discount < 0) {
      resp.code = 1;
      resp.message = 'coupon not found or it is unavailable';
      res.status(404);
    } else {
      resp.code = 0;
      resp.message = 'success';
      resp.data = { discount };
    }
    res.json(resp);
  }

  @Post('submitForm')
  @Header('Content-type', 'application/json')
  @Header('Access-Control-Allow-Origin', '*')
  async submitForm(@Body() params: SubmitFormParams, @Res() res: Response) {
    console.log(`incoming request body => ${JSON.stringify(params)}`);
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
