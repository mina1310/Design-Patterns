import { useEffect, useState } from "react";
import { notificationStore } from "../services/createNotificationStore";

export default function SecondNotification() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const listener = (data) => setNotifications(data);
    notificationStore.subscribe(listener);

    return () => notificationStore.unsubscribe(listener);
  }, []);

  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
      <h3>Notifications</h3>
      <ul>
        {notifications.map((n, i) => (
          <li key={i}>
            {n}{" "}
            <button onClick={() => notificationStore.removeNotification(i)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
