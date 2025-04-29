import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("atik");

  const updateName = () => {
    setName("Mahmud");
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
    </div>
  );
}

export default MyComponents;
