import React, { useEffect, useState } from "react";
import axios from "axios";

const CardSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://admin.refabry.com/api/all/product/get"
        );
        const productsArray = response.data?.data?.data;

        if (Array.isArray(productsArray)) {
          setProducts(productsArray);
        } else {
          console.error("Products data is not an array:", response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <img
            src={`https://admin.refabry.com/storage/product/${product.image}`}
            alt={product.title}
            className="w-full h-48 object-cover rounded-md mb-2"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">{product.price} TK</p>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
