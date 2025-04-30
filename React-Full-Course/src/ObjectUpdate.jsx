import React, { useState } from "react";

function ObjectUpdate() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    year: 2020,
    color: "black",
  });
  function handleBrandChange(e) {
    setCar({ ...car, brand: e.target.value });
  }

  function handleModelChange(e) {
    setCar({ ...car, model: e.target.value });
  }

  function handleYearChange(e) {
    setCar({ ...car, year: e.target.value });
  }

  function handleColorChange(e) {
    setCar({ ...car, color: e.target.value });
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
