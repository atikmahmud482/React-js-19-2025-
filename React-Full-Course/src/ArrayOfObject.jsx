import React, { useState } from "react";

function ArrayOfObject() {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {}

  function handleRemoveCar(index) {}

  function handleYearChange(event) {}

  function handleMakeChange(event) {}

  function handleModelChange(event) {}

  return (
    <div>
      <h2>List of Car Object</h2>
      <ul></ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        type="text"
        placeholder="Add car Make"
        value={carMake}
        onChange={handleMakeChange}
      />{" "}
      <br />
      <input
        type="text"
        placeholder="Add car Model"
        value={carMake}
        onChange={handleModelChange}
      />{" "}
      <br />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default ArrayOfObject;
