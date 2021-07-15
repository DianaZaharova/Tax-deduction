import React from "react";
import styles from "./TextButton.module.css";

const TextButton = (props) => {
  return (
    <button className={styles.button} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default TextButton;
