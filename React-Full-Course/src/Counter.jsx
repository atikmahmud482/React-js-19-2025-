import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter</h1>
      <h2>Count: {count}</h2> <button onClick={decrement}>Decrement</button>
      <button onClick={resetCount}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
