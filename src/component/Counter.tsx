import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    } else {
      const newTimerId = setInterval(() => {
        setCounter((prevValue) => prevValue + 1);
      }, 1000);
      setTimerId(newTimerId);
    }
  };

  const handleReset = () => {
    setCounter(0);
    if (timerId) clearInterval(timerId);
    setTimerId(null);
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleStart}>{timerId ? "Pause" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default Counter;
