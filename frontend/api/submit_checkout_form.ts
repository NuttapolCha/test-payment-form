import { resourceLimits } from "worker_threads";

export interface CheckoutFormParams {
  // buyer information
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  couponCode: string;
  recommenderEmail: string;

  // payment related
  creditCardNumber: string | null;
  creditCardExpireDate: Date | null;
  creditCardCVV: string | null;
}

interface SubmitFormResp {
  code: number;
  message: string;
}

// submitCheckoutForm returns an error message from backend.
// If no error then returns empty string.
export const submitCheckoutForm = async (
  params: CheckoutFormParams
): Promise<string> => {
  console.log(JSON.stringify(params));
  const requestOptions: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(params),
    redirect: "follow",
    mode: "cors",
  };

  try {
    const resp = await fetch(
      "http://localhost:3000/api/submitForm",
      requestOptions
    );

    if (resp.status < 200 || resp.status >= 300) {
      return `unexpected response: ${resp.status} ${resp.statusText}`;
    }

    const submitFormResp: SubmitFormResp = await resp.json();
    if (submitFormResp.code != 0) {
      return submitFormResp.message;
    }

    return "";
  } catch (err) {
    return `error when fetching: ${err}`;
  }
};
