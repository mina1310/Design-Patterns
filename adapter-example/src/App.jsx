import { useState } from "react";

import "./App.css";
import { NewMessenger } from "./components/NewMessenger";
import { MessageAdapter } from "./components/MessageAdapter";

function App() {
  const [inputText, setInputText] = useState("");
  const [showInputText, setShowInputText] = useState("");
  const inputHandler = () => {
    const message = new NewMessenger();
    const adapter = new MessageAdapter(message);
    const showMessage = adapter.send(inputText);
    setShowInputText(showMessage);
    setInputText("");
    console.log("app done");
  };

  return (
    <div
      style={{ display: "flex", gap: "8rem", width: "100%", height: "100vh" }}
    >
      <div>
        <h2>you can type message to admin and see that </h2>
        <input
          type="text"
          placeholder="write you're message"
          id="message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          style={{ margin: "1rem" }}
        />
        <button onClick={inputHandler}>click</button>
      </div>
      <div>
        <h2>see message</h2>
        {showInputText && <p>{showInputText}</p>}
      </div>
    </div>
  );
}

export default App;
