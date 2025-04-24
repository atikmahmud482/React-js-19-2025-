// Products.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to the product detail page

  useEffect(() => {
    // Fetch product data
    fetch("https://admin.refabry.com/api/all/product/get?page=1")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setProducts(data.data.data); // Update products state with fetched data
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleLearnMoreClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-xl overflow-hidden">
          <img
            src={`https://admin.refabry.com/storage/product/${product.product_images?.[0]?.name}`}
            alt={product.name}
            className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-6 md:mb-0"
          />

          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2">{product.short_desc}</p>
            <p className="text-blue-600 font-semibold mt-2">
              Tk {product.price}
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
              onClick={() =>
                navigate(`/product/${product.id}`, { state: { product } })
              }>
              Learn More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
