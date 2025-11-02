import { useState } from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";
import MessageList from "./MessageList";
import { createUser } from "../utils/createUser";

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);

  const showMessage = (user, message) => {
    setMessages((prev) => [...prev, { user, message }]);
  };

  const addUser = (name) => {
    const newUser = createUser(name, { showMessage });
    setUsers((prev) => [...prev, newUser]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat Room</h2>

      <AddUser onAddUser={addUser} />

      <UserList users={users} />

      <MessageList messages={messages} />
    </div>
  );
};
export default ChatRoom;
