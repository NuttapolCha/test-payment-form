import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Checkout.module.css";
import CouponForm, { CouponInfo } from "../components/CouponForm/CouponForm";
import BillingForm from "../components/BillingForm/BillingForm";
import OrderInfo from "../components/OrderInfo/OrderInfo";
import PaymentForm from "../components/PaymentForm/PaymentForm";
import Button from "../components/UI/Button/Button";

// CheckoutFormParams is what we will POST to backend
interface CheckoutFormParams {
  // buyer information
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  couponCode: string;
  recommenderEmail: string;

  // payment related
  creditCardNumber: string;
  creditCardExpireDate: Date;
  creditCardCVV: string;
}

interface BuyerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phoneNo: string;
  recommenderEmail: string;
}

const CheckoutPage: NextPage = () => {
  const items = [
    {
      name: "Annual Subscription",
      amount: 1,
      price: 5000,
    },
  ];

  const [buyerInfo, setBuyerInfo] = useState<BuyerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    recommenderEmail: "",
  });

  const [couponInfo, setCouponInfo] = useState<CouponInfo>({
    couponCode: "career92",
    discount: 1600,
  });

  const onPurchaseHandler = (e: any) => {
    console.log(`Thanks for purchase! ${buyerInfo}`)
  }

  console.log(buyerInfo);

  return (
    <div className={styles.container}>
      <Head>
        <title>checkout</title>
      </Head>

      <h1 className={styles.title}>Checkout and Payment</h1>
      <CouponForm couponInfo={couponInfo} setCouponInfo={setCouponInfo} />
      <h2>Buyer Information</h2>
      <div className={styles["billing-info"]}>
        <div className={styles["billing-container"]}>
          <BillingForm buyerInfo={buyerInfo} setBuyerInfo={setBuyerInfo} />
        </div>
        <div className={styles["order-container"]}>
          <OrderInfo
            selectedItems={items}
            couponCode={couponInfo.couponCode}
            discount={1600}
            setCouponInfo={setCouponInfo}
          />
          <PaymentForm />
          <div className={styles["purchase-btn"]}>
            <h3>{`Once you click 'Purchase', please do not refresh or exit the browser.`}</h3>
            <Button btnType="submit" label="Purchase" onClickHandler={onPurchaseHandler}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
