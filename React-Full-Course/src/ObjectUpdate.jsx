import React, { useState } from "react";

function ObjectUpdate() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    year: 2020,
    color: "black",
  });
  function handleBrandChange(e) {
    setCar((c) => ({ ...c, brand: e.target.value }));
  }

  function handleModelChange(e) {
    setCar((c) => ({ ...c, model: e.target.value }));
  }

  function handleYearChange(e) {
    setCar((c) => ({ ...c, year: e.target.value }));
  }

  function handleColorChange(e) {
    setCar((c) => ({ ...c, color: e.target.value }));
  }

  return (
    <div>
      <p className="object-update">
        Your favorite car is: {car.brand}-{car.model}-{car.year}-{car.color}{" "}
      </p>
      <input type="text" value={car.brand} onChange={handleBrandChange} />{" "}
      <br />
      <input type="text" value={car.model} onChange={handleModelChange} />{" "}
      <br />
      <input type="number" value={car.year} onChange={handleYearChange} />{" "}
      <br />
      <input type="text" value={car.color} onChange={handleColorChange} />{" "}
      <br />
    </div>
  );
}

export default ObjectUpdate;
