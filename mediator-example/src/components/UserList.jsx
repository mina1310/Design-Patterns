import { useState } from "react";

const UserList = ({ users }) => {
  const [texts, setTexts] = useState({});

  const handleChange = (name, value) => {
    setTexts((prev) => ({ ...prev, [name]: value }));
  };

  const handleSend = (u) => {
    const message = texts[u.name] || "";
    if (!message.trim()) return;
    u.send(message);
    setTexts((prev) => ({ ...prev, [u.name]: "" }));
  };

  return (
    <div>
      <h3>کاربران:</h3>
      {users.map((u, i) => (
        <div key={i} style={{ margin: "8px 0" }}>
          <strong>{u.name}</strong>
          <input
            value={texts[u.name] || ""}
            onChange={(e) => handleChange(u.name, e.target.value)}
            placeholder="پیام"
          />
          <button onClick={() => handleSend(u)}>ارسال</button>
        </div>
      ))}
    </div>
  );
};
export default UserList;
