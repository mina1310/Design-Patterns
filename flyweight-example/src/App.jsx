import { useMemo } from "react";
import "./App.css";
import ProductItem from "./components/ProductItem";
import MethodBuy from "./components/MethodBuy";

function App() {
  const shoppingList = [
    { id: 1, product: "phone", price: 2500, method: "online" },
    { id: 2, product: "cream", price: 2500, method: "online" },
    { id: 3, product: "book", price: 2500, method: "online" },
  ];
  let selectedMethod = useMemo(() => <MethodBuy method="online" />, []);

  return (
    <>
      <h1>My shopping list</h1>
      {shoppingList.map((item, index) => (
        <ProductItem
          key={item.id}
          product={item.product}
          price={item.price}
          index={index}
          method={selectedMethod}
        />
      ))}
    </>
  );
}

export default App;
