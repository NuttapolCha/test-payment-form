import React from "react";

import styles from "./Input.module.css";

declare interface InputProps {
  id: string;
  label: string;
  placeHolder: string;
  isRequired: boolean;
  isValid: boolean | null;
  inputType: any;
  onInputChangeHandler: () => void;
}

const Input = (props: InputProps) => {
  return (
    <div
      className={`${styles.control} ${
        props.isValid === false ? styles.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>
        {props.label}
        <span className={styles.required}>{`${props.isRequired ? '*' : ''}`}</span>
      </label>
      <input
        id={props.id}
        type={props.inputType}
        placeholder={props.placeHolder}
        onChange={props.onInputChangeHandler}
      />
    </div>
  );
};

export default Input;
