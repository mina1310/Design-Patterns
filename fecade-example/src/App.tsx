import { useState } from "react";
import { AuthFacade } from "./utils/AuthFacade";

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const user = await AuthFacade.login("mina@example.com", "password");
      setUser(user);
    } catch (e: any) {
      setError(e.message);
    }
  };

  const handleLogout = async () => {
    await AuthFacade.logout();
    setUser(null);
  };

  const handleGetProfile = async () => {
    try {
      const profile = await AuthFacade.getProfile();
      alert(`Name: ${profile.name}\nEmail: ${profile.email}`);
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <div style={{ textAlign: "right", direction: "rtl", padding: 20 }}>
      <h2> مثال :Facade در React</h2>
      {user ? (
        <>
          <p>سلام {user.name}!</p>
          <button onClick={handleGetProfile}>نمایش پروفایل</button>
          <button onClick={handleLogout}>خروج</button>
        </>
      ) : (
        <>
          <button onClick={handleLogin}>ورود</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </>
      )}
    </div>
  );
}
