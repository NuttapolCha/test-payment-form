import { useState } from "react";
import styles from "./PaymentForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

export interface CreditCardInfo {
  creditCardNo: string | null;
  expireDate: Date | null;
  cvc: string | null;
}

interface PaymentFormProps {
  creditCardInfo: CreditCardInfo;
  setCreditCardInfo: (e: any) => void;
}

const PaymentForm = (props: PaymentFormProps) => {
  const { creditCardInfo, setCreditCardInfo } = props;

  const onCreditCardNoChangeHandler = (e: any) => {
    setCreditCardInfo({
      ...creditCardInfo,
      creditCardNo: e.target.value
    })
  }

  const onExpireDateChangeHandler = (e: any) => {
    setCreditCardInfo({
      ...creditCardInfo,
      expireDate: e.target.value
    })
  }

  const onCvcChangeHandler = (e: any) => {
    setCreditCardInfo({
      ...creditCardInfo,
      cvc: e.target.value
    })
  }

  return (
    <div>
      <h2>Pay via Credit Card</h2>
      <Input
        id="card_no"
        label="Credit Card No"
        placeHolder="**** **** **** ****"
        isRequired={true}
        isValid={true}
        inputType="text"
        onInputChangeHandler={onCreditCardNoChangeHandler}
      />
      <div className={styles["expire-and-cvv"]}>
        <Input
          id="expire_date"
          label="Expire Date"
          placeHolder="MM / YY"
          isRequired={true}
          isValid={true}
          inputType="month"
          onInputChangeHandler={onExpireDateChangeHandler}
        />
        <Input
          id="cvc"
          label="CVC"
          placeHolder="CVC"
          isRequired={true}
          isValid={true}
          inputType="text"
          onInputChangeHandler={onCvcChangeHandler}
        />
      </div>
    </div>
  );
};

export default PaymentForm;
