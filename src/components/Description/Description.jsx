import React from "react";
import styles from "./Description.module.css";

const Description = (props) => {
  return <p className={styles.description}>{props.text}</p>;
};

export default Description;
