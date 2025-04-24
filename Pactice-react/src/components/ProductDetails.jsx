import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Fetching product:", id); // Debugging: check if ID is correct
    fetch(`https://admin.refabry.com/api/all/product/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setProduct(data.data);
        } else {
          setError("Product not found");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return (
      <div className="text-red-500 text-center">
        <h2>Product not found</h2>
        <p>Please check the product ID.</p>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <div className="flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <img
          src={`https://admin.refabry.com/storage/${product.product_images[0].name}`}
          alt={product.name}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg mb-6 md:mb-0"
        />

        <div className="md:ml-8 mt-6 md:mt-0">
          {/* Product Name */}
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>

          {/* Product Description */}
          <p className="text-gray-600 mt-4">{product.description}</p>

          {/* Product Price */}
          <p className="text-xl font-semibold text-blue-600 mt-6">
            Price: Tk {product.price}
          </p>

          {/* Add to Cart Button */}
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
