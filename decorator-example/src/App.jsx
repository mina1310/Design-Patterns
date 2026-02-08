import "./App.css";
import Greeting from "./components/Greeting";
import { withTime } from "./components/withTime";

function App() {
  const GreetingWithTime = withTime(Greeting);
  return (
    <div style={{ border: "10px solid", width: "50vw" }}>
      <GreetingWithTime name="mina" />
    </div>
  );
}

export default App;
