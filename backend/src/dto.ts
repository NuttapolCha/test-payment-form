export class SubmitFormParams {
  // required
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  couponCode: string;

  // optional
  recommonderEmail: string;
}

export class CommonResponse {
  code: number;
  message: string;
  data: any;
}
