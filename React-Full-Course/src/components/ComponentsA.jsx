import React, { createContext, useState } from "react";
import ComponentsB from "./ComponentsB";

export const userContext = createContext();

function ComponentsA() {
  const [user, setUser] = useState("Atik");
  return (
    <div className="box">
      <h1>ComponentsA</h1>
      <h2>{`Hello ${user}`}</h2>
      <userContext.Provider value={user}>
        <ComponentsB user={user} />
      </userContext.Provider>
    </div>
  );
}

export default ComponentsA;
