// import React, { useEffect, useState } from "react";

// function UseEffect() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("red");
//   useEffect(() => {
//     document.title = `Count: ${count} ${color}`;
//   }, [count, color]);

//   function addCount() {
//     setCount((c) => c + 1);
//   }
//   function subtractCount() {
//     setCount((c) => c - 1);
//   }

//   function colorChange() {
//     setColor((c) => (c === "red" ? "blue" : "red"));
//   }

//   return (
//     <>
//       <p style={{ color: color }}> Count: {count}</p>
//       <button onClick={addCount}>Add</button>
//       <button onClick={subtractCount}>Subtract</button> <br />
//       <button onClick={colorChange}>Color Change</button>
//     </>
//   );
// }

// export default UseEffect;

import React, { useEffect, useState } from "react";

function UseEffect() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("window resized");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("window removed");
    };
  }, []);

  useEffect(() => {
    document.title = `width: ${width} height: ${height}`;
  }, [width, height]);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default UseEffect;
