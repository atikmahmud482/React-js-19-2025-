import React, { useState } from "react";
import Student from "./Student";

function MyComponents() {
  const [name, setName] = useState("atik");
  const [age, setAge] = useState(0);
  const [isStudent, setIsStudent] = useState(false);

  const updateName = () => {
    setName("Mahmud");
  };
  const updateAge = () => {
    setAge(age + 1);
  };
  const updateIsStudent = () => {
    setIsStudent(!isStudent);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={updateAge}>Set Age</button>
      <p>Is Student: {isStudent ? "YES" : "NO"}</p>
      <button onClick={updateIsStudent}>Student</button>
    </div>
  );
}

export default MyComponents;
