import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const product = state?.product;

  if (!product) {
    return (
      <div className="text-red-500 text-center">
        <h2>Product not found</h2>
        <p>Please check the product ID or navigate from the product list.</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row items-center">
        <img
          src={`https://admin.refabry.com/storage/product/${product.product_images?.[0]?.name}`}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-6 md:mb-0"
        />

        <div className="md:ml-8 mt-6 md:mt-0">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-gray-600 mt-4 whitespace-pre-line">
            {product.short_desc}
          </p>
          <p className="text-xl font-semibold text-blue-600 mt-6">
            Price: Tk {product.price}
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
