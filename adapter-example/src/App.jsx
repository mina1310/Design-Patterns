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
    <div>
      <div>
        <h2>you can type you're code here and see that here</h2>
        <input
          type="text"
          placeholder="write you're message"
          id="message"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
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
