import { useState } from "react";
import "./App.css";
import ButtonTheme from "./components/ButtonTheme";
import CardTheme from "./components/CardTheme";
import LigthFactory from "./factories/LigthTheme";
import DarkFactory from "./factories/DarkTheme";

function App() {
  const [factory, setFactory] = useState(new LigthFactory());

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1> Theme Switcher with Abstract Factory</h1>

      <div>
        <button onClick={() => setFactory(new LigthFactory())}>
          Light Theme
        </button>
        <button
          onClick={() => setFactory(new DarkFactory())}
          style={{ marginLeft: "10px" }}
        >
          Dark Theme
        </button>
      </div>

      <ButtonTheme factory={factory} />
      <CardTheme factory={factory} />
    </div>
  );
}
export default App;
