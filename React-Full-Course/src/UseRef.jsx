import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("first render");
  });

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  }

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <input ref={inputRef} />
    </>
  );
}

export default UseRef;
