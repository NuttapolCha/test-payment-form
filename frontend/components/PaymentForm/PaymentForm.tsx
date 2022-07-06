import styles from "./PaymentForm.module.css";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";

const PaymentForm = () => {
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
        onInputChangeHandler={() => {}}
      />
      <div className={styles["expire-and-cvv"]}>
        <Input
          id="expire_date"
          label="Expire Date"
          placeHolder="MM / YY"
          isRequired={true}
          isValid={true}
          inputType="month"
          onInputChangeHandler={() => {}}
        />
        <Input
          id="cvc"
          label="CVC"
          placeHolder="CVC"
          isRequired={true}
          isValid={true}
          inputType="text"
          onInputChangeHandler={() => {}}
        />
      </div>
    </div>
  );
};

export default PaymentForm;
