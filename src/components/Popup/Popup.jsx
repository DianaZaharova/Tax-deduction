import React, { useState } from "react";
import styles from "./Popup.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";
import Description from "../Description/Description";
import Title from "../Title/Title";
import TextButton from "../TextButton/TextButton";
import Tags from "../Tags/Tags";
import InfoList from "../InfoList/InfoList";

const Popup = (props) => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);
  return (
    <div className={styles.wrap}>
      <div className={styles["header-wrap"]}>
        <Title text={"Налоговый вычет"} />
        <button
          className={styles["close-btn"]}
          onClick={() => {
            props.setPopupOpen(false);
            props.setInput("");
            props.setError(false);
          }}
          aria-label="Закрыть попап"
        ></button>
      </div>
      <Description
        text={
          "Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляетне более 13% от своего официального годового дохода."
        }
      />
      <Input
        error={props.error}
        input={props.input}
        setInput={props.setInput}
        labelText={"Ваша зарплата в месяц"}
      />
      <TextButton
        text={"Рассчитать"}
        onClick={() => {
          if (props.input.length >= 5) {
            setInfoIsOpen(!infoIsOpen);
            props.setError(false);
          } else {
            props.setError(true);
            props.setInput("");
          }
        }}
      />
      {infoIsOpen && (
        <InfoList
          text={"Итого можете внести в качестве досрочных:"}
          payments={props.payments}
        />
      )}
      <Tags text={"Что уменьшаем?"} labelText1={"Платёж"} labelText2={"Срок"} />
      <Button
        text={"Добавить"}
        type="big"
        onClick={() => {
          props.setPopupOpen(false);
          props.setInput("");
          props.setError(false);
        }}
      />
    </div>
  );
};

export default Popup;
