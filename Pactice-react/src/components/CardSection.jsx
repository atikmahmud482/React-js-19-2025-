import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const CardSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://admin.refabry.com/api/all/product/get")
      .then((res) => {
        setProducts(res.data.data.data); // access nested `data` array
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardSection;
