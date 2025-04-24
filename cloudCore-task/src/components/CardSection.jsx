import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice.js"; // Ensure this action is correct
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Destructure state safely from useSelector
  const { products, loading, error } = useSelector(
    (state) => state.products || {}
  );

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products?.length]);

  // Error and loading states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="card-section">
      {products?.map((product) => (
        <div
          key={product.id}
          className="card"
          onClick={() => navigate(`/product/${product.id}`)}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
