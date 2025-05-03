import React, { useEffect, useState } from "react";

function UseEffect() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("red");
  useEffect(() => {
    document.title = `Count: ${count} ${color}`;
  }, [count, color]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }

  function colorChange() {
    setColor((c) => (c === "red" ? "blue" : "red"));
  }

  return (
    <>
      <p style={{ color: color }}> Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button> <br />
      <button onClick={colorChange}>Color Change</button>
    </>
  );
}

export default UseEffect;
