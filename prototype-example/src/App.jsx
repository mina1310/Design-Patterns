import { useState } from "react";

import "./App.css";
import { Setting } from "./Setting";

function App() {
  const [defaultSetting, setDefaultSetting] = useState(
    new Setting("light", "en", 16)
  );
  const [clone, setClone] = useState();
  function handleClick() {
    const newClone = defaultSetting.clone();
    newClone.theme = "dark";
    newClone.font = 20;
    setClone(newClone);
  }

  return (
    <div className="main">
      <div className="default-setting">
        <h2>default setting</h2>
        <ul>
          <li>theme is:{defaultSetting.theme}</li>
          <li>language is:{defaultSetting.lan}</li>
          <li>font size is:{defaultSetting.font}</li>
        </ul>
      </div>

      <button className="button" onClick={handleClick}>
        create clone
      </button>
      {clone && (
        <div className="clone">
          <h2>clone setting</h2>
          <ul>
            <li>theme is:{clone.theme}</li>
            <li>language is:{clone.lan}</li>
            <li>font size is:{clone.font}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
