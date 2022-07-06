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

  const useCouponHandler = async () => {
    // fetch the Backend
    try {
    const discount = await APIs.getDiscount(couponInfo.couponCode)
    setCouponInfo({
      couponCode: couponInfo.couponCode,
      discount: discount,
    })
    } catch(err) {
      alert(`could not get coupon information at this time because ${err}`)
      console.log(err)
      setCouponInfo({
        couponCode: "",
        discount: 0,
      })
    }
  };

  const onCouponCodeChangeHandler = (e: any) => {
    setCouponInfo({
      ...couponInfo,
      couponCode: e.target.value,
    });
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
