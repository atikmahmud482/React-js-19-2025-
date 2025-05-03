import React from "react";
import ComponentsD from "./ComponentsD";

function ComponentsC(props) {
  return (
    <div className="box">
      <h1>ComponentsC</h1>
      <ComponentsD user={props.user} />
    </div>
  );
}

export default ComponentsC;
