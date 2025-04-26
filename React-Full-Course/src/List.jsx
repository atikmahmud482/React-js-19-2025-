import React from "react";

function List() {
  const fruits = [
    { key: 1, name: "Apple", calories: 95 },
    { key: 2, name: "Banana", calories: 105 },
    { key: 3, name: "Orange", calories: 62 },
    { key: 4, name: "Mango", calories: 150 },
  ];

  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical sorting

  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical sorting

  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 100);

  const listItems = lowCalorieFruits.map((lowCalorieFruits) => (
    <li key={lowCalorieFruits.key}>
      {lowCalorieFruits.name}: &nbsp; <b>{lowCalorieFruits.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
