import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };
  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <h2 className="count-display">{count}</h2>
      <button className="counter-btn" onClick={decrement}>
        Decrement
      </button>
      <button className="counter-btn" onClick={resetCount}>
        Reset
      </button>
      <button className="counter-btn" onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
