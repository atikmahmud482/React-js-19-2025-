import React from "react";

function Button() {
  let count = 0;
  const handleClick = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times!`);
    } else {
      console.log(`${name} stop clicking me!`);
    }
  };
  // const handleClick2 = (name) => {
  //   console.log(`${name} stop clicking me!`);
  // };
  return (
    <div>
      <button onClick={() => handleClick("Bro")}>Click me</button>
    </div>
  );
}

export default Button;
