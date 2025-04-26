import React from "react";

function List(props) {
  // fruits.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical sorting

  // fruits.sort((a, b) => b.name.localeCompare(a.name)); // Reverse alphabetical sorting

  // fruits.sort((a, b) => a.calories - b.calories);
  // fruits.sort((a, b) => b.calories - a.calories);

  // const lowCalorieFruits = fruits.filter((fruit) => fruit.calories < 100);
  /*  const highCalorieFruits = fruits.filter((fruit) => fruit.calories >= 100);

      const listItems = highCalorieFruits.map((highCalorieFruits) => (
        <li key={highCalorieFruits.key}>
          {highCalorieFruits.name}: &nbsp; <b>{highCalorieFruits.calories}</b>
        </li>
      )); */

  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.key}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}

export default List;
