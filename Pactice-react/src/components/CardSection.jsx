import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CardSection = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // Hook to navigate to another page

  useEffect(() => {
    // Fetch data from your API
    fetch("https://admin.refabry.com/api/all/product/get?page=1")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === true) {
          setProducts(data.data.data); // Update state with the products data
        }
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleLearnMoreClick = (id) => {
    navigate(`/product/${id}`); // Navigate to the product detail page with the product id
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src={`https://admin.refabry.com/storage/product/${product.product_images?.[0]?.name}`}
              alt={product.name}
              className="object-cover rounded-lg w-full h-48 md:h-96"
              onError={(e) => (e.target.src = "/path/to/default-image.jpg")} // Default image on error
            />
          </div>

          {/* Text Section */}
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800">
              {product.name}
            </h3>
            <p className="text-gray-600 mt-2 line-clamp-3">
              {product.short_desc}
            </p>
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

export default CardSection;
