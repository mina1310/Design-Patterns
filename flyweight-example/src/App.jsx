import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  shoppingList = [
    { id: 1, product: "phone", price: 2500 },
    { id: 2, product: "cream", price: 2500 },
    { id: 3, product: "book", price: 2500 },
  ];
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>My shopping list</h1>
      <ProductItem />
    </>
  );
}

export default App;
