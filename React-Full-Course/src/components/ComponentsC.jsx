import React, { useContext } from "react";
import ComponentsD from "./ComponentsD";
import { userContext } from "./ComponentsA";

function ComponentsC() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentsC</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentsD />
    </div>
  );
}

export default ComponentsC;
