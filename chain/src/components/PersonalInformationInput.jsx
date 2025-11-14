import { useState } from "react";
import { useFormValidationChain } from "../hooks/useFormValidationChain";

export const PersonalInformationInput = () => {
  const [username, setUsername] = useState();
  const { error, validate } = useFormValidationChain();
  const handleChange = (e) => {
    setUsername(e.target.value);
    validate(e.target.value);
  };
  return (
    <div>
      <h2>لطفا اطلاعات زیر را تکمیل کنید</h2>
      <input name="username" value={username} onChange={handleChange} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!error && username && <p style={{ color: "green" }}>✅ معتبر است</p>}
    </div>
  );
};
