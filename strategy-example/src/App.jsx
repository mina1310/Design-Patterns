import { useState } from "react";

import "./App.css";
import { creditPay } from "./strategy/creditPay";
import { cryptoPay } from "./strategy/cryptoPay";

const strategies = {
  credit: creditPay,
  crypto: cryptoPay,
};

function App() {
  const [pay, setPay] = useState(() => strategies.credit);

  const handleChange = (e) => {
    setPay(() => strategies[e.target.value]);
  };

  const handleClick = () => {
    pay(100);
  };

  return (
    <>
      <h3>شما میتوانید روش پرداخت خود را انتخاب نمایید</h3>

      <select onChange={handleChange}>
        <option value="credit">کارت اعتباری</option>
        <option value="crypto">ارز دیجیتال</option>
      </select>

      <button onClick={handleClick}>پرداخت</button>
    </>
  );
}

export default App;
