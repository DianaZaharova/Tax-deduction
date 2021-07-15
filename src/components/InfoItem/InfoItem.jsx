import React, { useState } from "react";
import styles from "./InfoItem.module.css";

const InfoItem = (props) => {
  const [inputIsChecked, setInputIsChecked] = useState(props.checked);

  const addEnding = (number) => {
    const lastNumber = number % 10;
    if (number >= 11 && number <= 19) {
      return `${number}-ый`;
    } else if (lastNumber === 2 || (lastNumber >= 6 && lastNumber <= 8)) {
      return `${number}-ой`;
    } else if (lastNumber === 3) {
      return `${number}-ий`;
    } else if (
      lastNumber === 1 ||
      lastNumber === 4 ||
      lastNumber === 5 ||
      lastNumber === 0 ||
      lastNumber === 9
    ) {
      return `${number}-ый`;
    }
  };

  return (
    <li className={styles.item}>
      <input
        className={styles.input}
        type="checkbox"
        id={props.index}
        onChange={() => setInputIsChecked(!inputIsChecked)}
        checked={inputIsChecked}
      ></input>
      <label className={styles.label} htmlFor={props.index}></label>
      <p className={styles.info}>
        <span className={styles["info_money"]}>{props.item} рублей </span>
        {props.index === 2 ? "во " : "в "}
        {addEnding(props.index)} год
      </p>
    </li>
  );
};

export default InfoItem;
