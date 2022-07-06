import Input from "../UI/Input/Input";
import styles from './BillingForm.module.css';

const BillingForm = () => {
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
        onInputChangeHandler={() => {}}
      />
      <Input
        id="lastName"
        label="Last Name"
        placeHolder="in thai or english"
        isRequired={true}
        isValid={true}
        inputType="text"
        onInputChangeHandler={() => {}}
      />
    </div>
      <Input
        id="email"
        label="Email"
        placeHolder="please specify your active email in order to get your password"
        isRequired={true}
        isValid={true}
        inputType="email"
        onInputChangeHandler={() => {}}
      />
      <Input
        id="phoneNo"
        label="Phone No."
        placeHolder="please specify your phone no."
        isRequired={true}
        inputType="number"
        isValid={true}
        onInputChangeHandler={() => {}}
      />
      <Input
        id="recommenderEmail"
        label="Recommender Email"
        placeHolder="please specify recommender email"
        isRequired={false}
        inputType="email"
        isValid={true}
        onInputChangeHandler={() => {}}
      />
    </>
  );
};

export default BillingForm;
