import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./CouponForm.module.css";
import APIs from "../../api/api";

export interface CouponInfo {
  couponCode: string;
  discount: number;
}

const CouponForm = (props: any) => {
  const { couponInfo, setCouponInfo } = props;
  const [inputCouponCode, setInputCouponCode] = useState<string>(couponInfo.couponCode);

  const useCouponHandler = async (e: Event) => {
    // fetch the Backend
    e.preventDefault();
    try {
      const discount = await APIs.getDiscount(inputCouponCode);
      console.log(discount);
      setCouponInfo({
        couponCode: inputCouponCode,
        discount: discount,
      });
    } catch (err) {
      alert(`could not get coupon information at this time because ${err}`);
      console.log(err);
      setCouponInfo({
        couponCode: "",
        discount: 0,
      });
    }
  };

  const onCouponCodeChangeHandler = (e: any) => {
    setInputCouponCode(e.target.value)
  };

  return (
    <div className={styles.container}>
      <div className={styles["coupon-label"]}>
        <label htmlFor="coupon-input">
          Please specify discount coupon code
        </label>
      </div>
      <form className={styles["coupon-form"]}>
        <input
          id="coupon-input"
          name="coupon-input"
          type="text"
          placeholder="coupon code"
          value={inputCouponCode}
          onChange={onCouponCodeChangeHandler}
        />
        <Button
          btnType="submit"
          label="use coupon"
          onClickHandler={useCouponHandler}
        />
      </form>
    </div>
  );
};

export default CouponForm;
