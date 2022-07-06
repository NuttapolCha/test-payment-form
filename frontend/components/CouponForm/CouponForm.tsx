import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./CouponForm.module.css";

export interface CouponInfo {
  couponCode: string;
  discount: number;
}

const CouponForm = (props: any) => {
  const { couponInfo, setCouponInfo } = props;

  const useCouponHandler = (e: any) => {
    // fetch the Backend
    // if success then set couponCode and discount
    // if fail raise the error
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
          value={couponInfo.couponCode}
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
