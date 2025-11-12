import { useState } from "react";

export function useTrafficLight() {
  const redLight = () => ({
    color: "red",
    nextLight: () => {
      return greenLight;
    },
  });
  const greenLight = () => ({
    color: "green",
    nextLight: () => {
      return yellowLight;
    },
  });
  const yellowLight = () => ({
    color: "yellow",
    nextLight: () => {
      return redLight;
    },
  });
  const [state, setState] = useState(redLight());
  const changeLight = () => {
    setState(state.nextLight());
  };
  return { color: state.color, changeLight };
}
