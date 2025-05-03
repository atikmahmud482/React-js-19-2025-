import React, { useContext } from "react";
import { userContext } from "./ComponentsA";

function ComponentsD() {
  const user = useContext(userContext);
  return (
    <div className="box">
      <h1>ComponentsD</h1>
      <h2>{`Hi ${user}`}</h2>
    </div>
  );
}

export default ComponentsD;
