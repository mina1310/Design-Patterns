import React, { useState } from "react";

const Screen = {
  turnOn: () => console.log(" صفحه روشن شد"),
  turnOff: () => console.log(" صفحه خاموش شد"),
};

function createCommand(execute, undo) {
  return { execute, undo };
}

function useInvoker() {
  const [history, setHistory] = useState([]);

  const execute = (command) => {
    command.execute();
    setHistory((prev) => [...prev, command]);
  };

  const undo = () => {
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      if (last) last.undo();
      return prev.slice(0, -1);
    });
  };

  return { execute, undo };
}

export default function CommandPatternDemo() {
  const [color, setColor] = useState("white");
  const { execute, undo } = useInvoker();

  const turnOnCommand = createCommand(
    () => {
      setColor("gold");
      Screen.turnOn();
    },
    () => {
      setColor("black");
      Screen.turnOff();
    }
  );

  const turnOffCommand = createCommand(
    () => {
      setColor("black");
      Screen.turnOff();
    },
    () => {
      setColor("gold");
      Screen.turnOn();
    }
  );

  return (
    <div
      style={{
        direction: "rtl",
        textAlign: "center",
        height: "100vh",
        backgroundColor: color,
        transition: "background-color 0.3s ease",
      }}
    >
      <h2>الگوی Command در React</h2>
      <p>صفحه را روشن، خاموش یا Undo کن</p>

      <button
        onClick={() => execute(turnOnCommand)}
        style={{ padding: "10px 20px", margin: "10px" }}
      >
        روشن کن
      </button>

      <button
        onClick={() => execute(turnOffCommand)}
        style={{ padding: "10px 20px", margin: "10px" }}
      >
        خاموش کن
      </button>

      <button onClick={undo} style={{ padding: "10px 20px", margin: "10px" }}>
        Undo
      </button>
    </div>
  );
}
