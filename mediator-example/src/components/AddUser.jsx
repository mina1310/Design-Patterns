import { useState } from "react";

const AddUser = ({ onAddUser }) => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddUser(name);
    setName("");
  };
  return (
    <div>
      <h2>افزودن کاربر</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">کاربر جدید را اضافه کن</button>
      </form>
    </div>
  );
};
export default AddUser;
