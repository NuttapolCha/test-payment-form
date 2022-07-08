export class SubmitFormParams {
  // required
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  couponCode: string;

  // optional
  recommenderEmail: string;

  // payment related
  creditCardNumber: string;
  creditCardExpireDate: Date;
  creditCardCVV: string;
}

export class CommonResponse {
  code: number;
  message: string;
  data: any;
}
