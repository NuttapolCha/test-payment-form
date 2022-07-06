import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Checkout.module.css";
import CouponForm from "../components/CouponForm/CouponForm";
import BillingForm from "../components/BillingForm/BillingForm";
import OrderInfo from "../components/OrderInfo/OrderInfo";
import PaymentForm from "../components/PaymentForm/PaymentForm";

const CheckoutPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>checkout</title>
      </Head>

      <h1 className={styles.title}>Checkout and Payment</h1>
      <CouponForm />
      <h2>Buyer Information</h2>
      <div className={styles["billing-info"]}>
        <div className={styles["billing-container"]}>
          <BillingForm />
        </div>
        <div className={styles["order-container"]}>
          <OrderInfo />
          <PaymentForm />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
