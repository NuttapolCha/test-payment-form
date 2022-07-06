import React from "react";
import styles from "./Button.module.css";

declare interface ButtonProps {
  btnType: any;
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button type={props.btnType} className={styles.btn}>
      {props.label}
    </button>
  );
};

export default Button;
