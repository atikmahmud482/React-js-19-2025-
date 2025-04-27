import React from "react";

function Button() {
  const handleClick = () => {
    console.log("OUTCH!");
  };
  const handleClick2 = (name) => {
    console.log(`${name} stop clicking me!`);
  };
  return (
    <div>
      <button onClick={() => handleClick2("Bro")}>Click me</button>
    </div>
  );
}

export default Button;
