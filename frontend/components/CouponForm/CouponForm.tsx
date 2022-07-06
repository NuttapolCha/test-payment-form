import React, { useState } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import styles from "./CouponForm.module.css";

const CouponForm = () => {
  const [isFormValid, setisFormValid] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles["coupon-label"]}>
        <label htmlFor="coupon-input">
          Please specify discount coupon code
        </label>
      </div>
      <form className={styles["coupon-form"]}>
        <input id="coupon-input" name="coupon-input" type="text" placeholder="coupon code" />
        <Button btnType="submit" label="use coupon" />
      </form>
    </div>
  );
};

export default CouponForm;
