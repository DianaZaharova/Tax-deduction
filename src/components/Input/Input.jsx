import React from "react";
import styles from "./Input.module.css";
import classNames from "classnames";

const Input = (props) => {
  return (
    <div className={styles.wrap}>
      <label className={styles.label} htmlFor="salary">
        {props.labelText}
      </label>
      <input
        className={classNames(
          styles.input,
          props.error && styles["input_error"]
        )}
        placeholder="Введите данные"
        type="number"
        id="salary"
        name="salary"
        value={props.input}
        onInput={(e) => props.setInput(e.target.value)}
      ></input>
      {props.error && (
        <p className={styles.text}>Поле обязательно для заполнения</p>
      )}
    </div>
  );
};

export default Input;
