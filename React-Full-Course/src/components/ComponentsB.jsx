import React, { useContext } from "react";
import ComponentsC from "./ComponentsC";
import { userContext } from "./ComponentsA";

function ComponentsB() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentsB</h1>
      <h2>{`Hi ${user}`}</h2>
      <ComponentsC />
    </div>
  );
}

export default ComponentsB;
