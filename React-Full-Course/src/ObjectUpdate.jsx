import React, { useState } from "react";

function ObjectUpdate() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    year: 2020,
    color: "black",
  });
  function handleBrandChange() {
    setCar({ ...car, brand: "BM" });
  }

  function handleModelChange() {}

  function handleYearChange() {
    setCar({ ...car, year: 2021 });
  }

  function handleColorChange() {}

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
