import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleQuantityChange(e) {
    setQuantity(e.target.value);
  }

  function handleCommentChange(e) {
    setComment(e.target.value);
  }
  return (
    <div>
      <input type="text" value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input type="Number" value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea value={comment} onChange={handleCommentChange} id=""></textarea>
      <p>Comment: {comment}</p>
    </div>
  );
}

export default MyComponent;
