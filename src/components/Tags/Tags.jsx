import React, { useState } from "react";
import styles from "./Tags.module.css";

const Tags = (props) => {
  const [isPayment, setPayment] = useState(true);
  const [isTerm, setTerm] = useState(false);

  return (
    <div className={styles.wrap}>
      <p className={styles.text}>{props.text}</p>
      <div className={styles["check-wrap"]}>
        <input
          className={styles.input}
          type="radio"
          name="payment"
          id="payment"
          onChange={() => {
            setPayment(!isPayment);
            setTerm(!isTerm);
          }}
          checked={isPayment}
        ></input>
        <label className={styles.label} htmlFor="payment">
          {props.labelText1}
        </label>
        <input
          className={styles.input}
          type="radio"
          name="payment"
          id="term"
          onChange={() => {
            setPayment(!isPayment);
            setTerm(!isTerm);
          }}
          checked={isTerm}
        ></input>
        <label className={styles.label} htmlFor="term">
          {props.labelText2}
        </label>
      </div>
    </div>
  );
};

export default Tags;
