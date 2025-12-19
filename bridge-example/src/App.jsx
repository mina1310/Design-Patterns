import { createAdvancedRemote } from "./utils/createAdvancedRemote";
import { createRadio } from "./utils/CreateRadio";
import { createRemote } from "./utils/createRemote";
import { createTv } from "./utils/CreateTv";
import { useState } from "react";

function App() {
  const [tv] = useState(createTv());
  const [tvRemote] = useState(createAdvancedRemote(tv));

  const [radio] = useState(createRadio());
  const [radioRemote] = useState(createRemote(radio));

  const [, forceRender] = useState(0);
  const rerender = () => forceRender((n) => n + 1);

  return (
    <div style={{ padding: 20, fontFamily: "sans-serif" }}>
      <h2>Bridge Pattern Demo</h2>

      <div style={{ border: "1px solid #ccc", padding: 12, marginBottom: 16 }}>
        <h3> TV (Advanced Remote)</h3>
        <p>Status: {tv.isEnable() ? "ON" : "OFF"}</p>
        <p>Volume: {tv.getVolume()}</p>

        <button
          onClick={() => {
            tvRemote.togglePower();
            rerender();
          }}
        >
          Power
        </button>
        <button
          onClick={() => {
            tvRemote.volumeUp();
            rerender();
          }}
        >
          Vol +
        </button>
        <button
          onClick={() => {
            tvRemote.volumeDown();
            rerender();
          }}
        >
          Vol -
        </button>
        <button
          onClick={() => {
            tvRemote.mute();
            rerender();
          }}
        >
          Mute
        </button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: 12 }}>
        <h3> Radio (Simple Remote)</h3>
        <p>Status: {radio.isEnable() ? "ON" : "OFF"}</p>
        <p>Volume: {radio.getVolume()}</p>

        <button
          onClick={() => {
            radioRemote.togglePower();
            rerender();
          }}
        >
          Power
        </button>
        <button
          onClick={() => {
            radioRemote.volumeUp();
            rerender();
          }}
        >
          Vol +
        </button>
        <button
          onClick={() => {
            radioRemote.volumeDown();
            rerender();
          }}
        >
          Vol -
        </button>
      </div>
    </div>
  );
}

export default App;
