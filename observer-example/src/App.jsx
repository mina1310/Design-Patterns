import { useState } from "react";
import "./App.css";
import { notificationStore } from "./components/createNotificationStore";
import FirstNotification from "./components/FirstNotification";
import SecondNotification from "./components/SecondNotification";

export default function App() {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim()) {
      notificationStore.addNotification(input.trim());
      setInput("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Observer Pattern Demo</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="پیام خود را بنویسید..."
      />
      <button onClick={handleAdd}>Add Notification</button>

      <div style={{ display: "flex" }}>
        <FirstNotification />
        <SecondNotification />
      </div>
    </div>
  );
}
