import React from "react";
import ComponentsC from "./ComponentsC";

function ComponentsB(props) {
  return (
    <div className="box">
      <h1>ComponentsB</h1>
      <ComponentsC user={props.user} />
    </div>
  );
}

export default ComponentsB;
