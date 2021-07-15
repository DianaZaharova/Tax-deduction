import React from "react";
import styles from "./Button.module.css";
import classNames from "classnames";

const Button = (props) => {
  return (
    <button
      className={classNames(
        styles.button,
        props.type === "small" && styles["button_small"],
        props.type === "big" && styles["button_big"]
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

Button.defaultProps = {
  type: "small",
};

export default Button;
