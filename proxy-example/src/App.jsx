import { useState } from "react";
import { bankProxy } from "./utils/bankProxy";

function App() {
  const [result, setResult] = useState(null);

  const handleWithdraw = () => {
    const res = bankProxy.withdraw("Mina", 200);
    setResult(res);
  };

  const handleWrongUser = () => {
    const res = bankProxy.withdraw("Ali", 100);
    setResult(res);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ textAlign: "center", marginTop: "2rem", width: "100vw" }}>
        <h2> Bank Proxy Example</h2>
        <p>Balance: {bankProxy.balance}</p>

        <button onClick={handleWithdraw}>Withdraw 200 (Mina)</button>
        <button onClick={handleWrongUser}>Withdraw 100 (Ali)</button>

        {result && (
          <div style={{ marginTop: "1rem" }}>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
