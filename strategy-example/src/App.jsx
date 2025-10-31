import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { creditPay } from "./strategy/creditPay";
import { cryptoPay } from "./strategy/cryptoPay";

function App() {
  const [pay, setPay] = useState(creditPay);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "credit") setPay(() => creditPay);
    if (value === "crypto") setPay(() => cryptoPay);
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
      <button onClick={handleClick}> پرداخت </button>
    </>
  );
}

export default App;
