import React, { useState } from "react";

function ObjectUpdate() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    year: 2020,
    color: "black",
  });
  return (
    <div>
      <p className="object-update">
        Your favorite car is: {car.brand}-{car.model}-{car.color}-{car.year}{" "}
      </p>
    </div>
  );
}

export default ObjectUpdate;
