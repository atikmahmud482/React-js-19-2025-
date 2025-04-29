import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("atik");
  const [age, setAge] = useState(0);

  const updateName = () => {
    setName("Mahmud");
  };
  const updateAge = () => {
    setAge(age + 1);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>
    </div>
  );
}

export default MyComponents;
