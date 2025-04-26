import React from "react";

function List() {
  const fruits = [
    { key: 1, name: "Apple", calories: 95 },
    { key: 2, name: "Banana", calories: 105 },
    { key: 3, name: "Orange", calories: 62 },
    { key: 4, name: "Mango", calories: 150 },
  ];

  fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical sorting

  const listItems = fruits.map((fruit) => (
    <li key={fruit.key}>
      {fruit.name}: &nbsp; <b>{fruit.calories}</b>
    </li>
  ));

  return <ol>{listItems}</ol>;
}

export default List;
