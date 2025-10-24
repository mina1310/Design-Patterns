import { useEffect, useState } from "react";

export function withTime(Greeting) {
  return function AddTime(props) {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
      const timer = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
      return () => clearInterval(timer);
    }, []);

    return (
      <div>
        <Greeting {...props} />
        <p>time is :{time}</p>
      </div>
    );
  };
}
