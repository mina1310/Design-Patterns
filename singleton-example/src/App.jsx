// import "./App.css";
import { useState } from "react";
import config from "./config";

function App() {
  const [color, setColor] = useState(config.get("color"));
  const [theme, setTheme] = useState(config.get("theme"));
  const handleMultipleChanges = () => {
    config.setMultipleChanges({
      theme: "dark",
      color: "gray",
    });
    setColor(config.get("color"));
    setTheme(config.get("theme"));
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "20px", backgroundColor: color }}>
        <h1>This is about singleton design pattern</h1>
        <p>the current theme is:{config.get("theme")}</p>
        <p>the current color is:{config.get("color")}</p>
        <h2>You can change these setting via button below</h2>
        <button onClick={handleMultipleChanges}>click button</button>
      </div>
    </div>
  );
}

export default App;
