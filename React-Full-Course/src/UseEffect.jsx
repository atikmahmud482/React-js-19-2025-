import React, { useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);

  function addCount() {
    setCount((c) => c + 1);
  }
  return (
    <>
      <p> Count: {count}</p>
      <button onClick={addCount}>Add</button>
    </>
  );
}

export default UseEffect;
