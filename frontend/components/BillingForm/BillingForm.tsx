import Input from "../UI/Input/Input";
import styles from "./BillingForm.module.css";

const BillingForm = (props: any) => {
  const { buyerInfo, setBuyerInfo } = props;

  const onFirstNameChangeHandler = (e: any) => {
    setBuyerInfo({
      ...buyerInfo,
      firstName: e.target.value,
    })
  }

  const onLastNameChangeHandler = (e: any) => {
    setBuyerInfo({
      ...buyerInfo,
      lastName: e.target.value,
    })
  }

  const onEmailChangeHandler = (e: any) => {
    setBuyerInfo({
      ...buyerInfo,
      email: e.target.value,
    })
  }

  const onPhoneNoChangeHandler = (e: any) => {
    setBuyerInfo({
      ...buyerInfo,
      phoneNo: e.target.value,
    })
  }

  const onRecommenderEmailChangeHandler = (e: any) => {
    setBuyerInfo({
      ...buyerInfo,
      recommenderEmail: e.target.value,
    })
  }

  return (
    <>
      <div className={styles.fullname}>
        <Input
          id="firstName"
          label="First Name"
          placeHolder="in thai or english"
          isRequired={true}
          isValid={true}
          inputType="text"
          onInputChangeHandler={onFirstNameChangeHandler}
        />
        <Input
          id="lastName"
          label="Last Name"
          placeHolder="in thai or english"
          isRequired={true}
          isValid={true}
          inputType="text"
          onInputChangeHandler={onLastNameChangeHandler}
        />
      </div>
      <Input
        id="email"
        label="Email"
        placeHolder="please specify your active email in order to get your password"
        isRequired={true}
        isValid={true}
        inputType="email"
        onInputChangeHandler={onEmailChangeHandler}
      />
      <Input
        id="phoneNo"
        label="Phone No."
        placeHolder="please specify your phone no."
        isRequired={true}
        inputType="number"
        isValid={true}
        onInputChangeHandler={onPhoneNoChangeHandler}
      />
      <Input
        id="recommenderEmail"
        label="Recommender Email"
        placeHolder="please specify recommender email"
        isRequired={false}
        inputType="email"
        isValid={true}
        onInputChangeHandler={onRecommenderEmailChangeHandler}
      />
    </>
  );
};

export default BillingForm;
