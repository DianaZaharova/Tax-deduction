import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Button from "../Button/Button";
import Popup from "../Popup/Popup";

const App = () => {
  const [error, setError] = useState(false);
  const [input, setInput] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    calcTax(input);
  }, [input]);

  function calcTax(number) {
    if (input.length >= 5) {
      const taxInYear = number * 12 * 0.13;
      const maxPayment = 260000;
      let payments = [];

      if (taxInYear >= maxPayment) {
        payments.push(maxPayment);
      } else {
        let quotient = Math.floor(maxPayment / taxInYear);
        const remainder = Math.round(maxPayment % taxInYear);

        for (let i = 0; i < quotient; i++) {
          payments.push(taxInYear);
        }

        if (remainder !== 0) {
          payments.push(remainder);
        }
      }

      setPayments(payments);
    }
  }

  return (
    <div className={styles.wrap}>
      <Button
        text={"Налоговый вычет"}
        type="small"
        onClick={() => setPopupOpen(!isPopupOpen)}
      />
      {isPopupOpen && (
        <Popup
          setError={setError}
          error={error}
          input={input}
          setInput={setInput}
          setPopupOpen={setPopupOpen}
          payments={payments}
        />
      )}
    </div>
  );
};

export default App;
