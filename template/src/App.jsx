import "./App.css";
import Beverage from "./components/Beverage";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>آماده‌سازی نوشیدنی‌ها </h1>
      <Beverage
        name="چای"
        brew={() => "دم کردن چای"}
        addCondiments={() => "اضافه کردن دارچین"}
      />
      <Beverage
        name="قهوه"
        brew={() => "دم کردن قهوه"}
        addCondiments={() => "اضافه کردن شکر و شیر"}
      />
    </div>
  );
}

export default App;
