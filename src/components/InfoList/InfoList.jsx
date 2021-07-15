import React from "react";
import styles from "./InfoList.module.css";
import InfoItem from "../InfoItem/InfoItem";

const InfoList = (props) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.text}>{props.text}</p>
      <ul className={styles.list}>
        {props.payments !== 0 ? (
          props.payments.map((item, index) => (
            <InfoItem
              item={item}
              key={index}
              index={index + 1}
              checked={true}
            />
          ))
        ) : (
          <p className={styles.error}>
            Произашла ошибка, попробуйте перезагрузить страницу
          </p>
        )}
      </ul>
    </div>
  );
};

export default InfoList;
