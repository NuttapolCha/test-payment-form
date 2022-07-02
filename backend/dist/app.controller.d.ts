import { AppService } from './app.service';
import { SubmitFormParams } from './dto';
import { Response } from 'express';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    submitForm(params: SubmitFormParams, res: Response): void;
}
