import { useState } from "react";
import { book } from "../elements/book";
import { fruit } from "../elements/fruit";
import { totalPrice } from "../visitors/totalPrice";

const ShoppingCart = () => {
  const [items, setItems] = useState([
    book(1, "کتاب", "کتابخانه نیمه شب", 4000),
    fruit("میوه", "انار", 1000, 2),
  ]);
  const [total, setTotal] = useState("");
  const priceHandler = () => {
    const total = items
      .map((item) => item.accept(totalPrice))
      .reduce((acc, value) => acc + value, 0);
    setTotal(total);
  };
  return (
    <div>
      <h2>لیست خریدهای من</h2>
      <ul>
        {items.map((items, index) => (
          <li
            style={{ direction: "rtl", padding: "2px", textAlign: "right" }}
            key={index}
          >
            <span>{items.quantity || items.weight}</span>
            <span>{items.quantity ? " عدد" : " کیلوگرم"}-</span>
            <span>{items.type}</span>
            <span>-{items.title}</span>
          </li>
        ))}
      </ul>
      <button style={{ backgroundColor: "yellow" }} onClick={priceHandler}>
        محاسبه کل قیمت
      </button>
      <p style={{ textAlign: "right", direction: "rtl" }}>قیمت کل:{total}</p>
    </div>
  );
};
export default ShoppingCart;
