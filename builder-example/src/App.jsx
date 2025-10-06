import "./App.css";
import { CarBuilder } from "./CarBuilder";

function App() {
  const bmw = new CarBuilder()
    .setbrand("BMW")
    .setcolor("black")
    .settdoor(4)
    .setengine("v8")
    .build();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Builder Pattern Example</h1>
      <p>{bmw.toString()}</p>
    </div>
  );
}

export default App;
