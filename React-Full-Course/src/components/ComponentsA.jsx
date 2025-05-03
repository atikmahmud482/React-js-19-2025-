import React, { useState } from "react";
import ComponentsB from "./ComponentsB";

function ComponentsA() {
  const [user, setUser] = useState("ComponentsA");
  return (
    <div className="box">
      <h1>ComponentsA</h1>
      <h2>{`Hello ${user}`}</h2>
      <ComponentsB user={user} />
    </div>
  );
}

export default ComponentsA;
