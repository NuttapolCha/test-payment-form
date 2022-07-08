import React from "react";
import styles from "./Button.module.css";

declare interface ButtonProps {
  btnType: any;
  label: string;
  onClickHandler: (e: any) => void
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.btnType} className={styles.btn} onClick={props.onClickHandler}>
      {props.label}
    </button>
  );
};

export default Button;
