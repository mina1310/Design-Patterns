import { useState } from "react";
import NotificationFactory from "./Notification";

function App() {
  const [notification, setNotification] = useState([]);
  const handleNotification = (type) => {
    const notif = NotificationFactory.create(
      type,
      `this message is about ${type} notification`
    ).notify();
    setNotification((prev) => [...prev, notif]);
  };
  return (
    <div style={{ paddingLeft: "2rem" }}>
      <h2>show me notifications by these buttons</h2>
      <button
        onClick={() => handleNotification("success")}
        style={{ borderColor: "green" }}
      >
        successs button
      </button>
      <button
        onClick={() => handleNotification("error")}
        style={{ borderColor: "red" }}
      >
        error button
      </button>
      <h3>error list:</h3>
      {notification.length === 0 ? (
        "there is not any notification"
      ) : (
        <ul>
          {notification.map((notif, index) => (
            <li key={index}>{notif}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
