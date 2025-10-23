import { useState } from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";

function App() {
  const shoppingList = [
    { id: 1, product: "phone", price: 2500, method: "online" },
    { id: 2, product: "cream", price: 2500, method: "online" },
    { id: 3, product: "book", price: 2500, method: "online" },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My shopping list</h1>
      {shoppingList.map((item, index) => (
        <ProductItem
          key={item.id}
          product={item.product}
          price={item.price}
          index={index}
        />
      ))}
    </>
  );
}

export default App;
