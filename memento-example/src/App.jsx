import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [history, setHistory] = useState([]);
  const [redo, setRedo] = useState([]);
  const handleChange = (e) => {
    const newText = e.target.value;
    setHistory((prev) => [...prev, text]);
    setText(newText);
    setRedo([]);
  };
  const handleUndo = () => {
    const lastIndex = history.length;
    if (lastIndex === 0) return;
    const lastChange = history[lastIndex - 1];
    setRedo((prev) => [...prev, text]);
    setHistory((prev) => prev.slice(0, lastIndex - 1));
    setText(lastChange);
  };
  const handleRedo = () => {
    if (redo.length === 0) return;
    setHistory((prev) => [...prev, text]);
    setRedo((prev) => prev.slice(0, redo.length - 1));
    setText(redo[redo.length - 1]);
  };

  return (
    <div>
      <textarea
        rows="5"
        cols="30"
        style={{
          resize: "none",
          width: "100%",
          padding: "8px",
          borderRadius: "8px",
          fontFamily: "inherit",
          border: "1px solid #ccc",
        }}
        value={text}
        onChange={handleChange}
      />
      <h2>you can see text here</h2>
      <p style={{ border: text ? "1px solid" : "none", color: "#555" }}>
        {text}
      </p>
      <button onClick={handleRedo} disabled={redo.length === 0}>
        Redo
      </button>
      <button onClick={handleUndo} disabled={history.length === 0}>
        undo
      </button>
    </div>
  );
}

export default App;
