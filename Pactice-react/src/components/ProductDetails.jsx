import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://admin.refabry.com/api/all/product/get")
      .then((res) => {
        const found = res.data.data.data.find((item) => item.id == id);
        setProduct(found);
      })
      .catch((err) => console.error("Error loading product:", err));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="p-6">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full max-w-md mx-auto rounded-xl"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-lg text-gray-600 mt-2">{product.description}</p>
      <p className="text-2xl font-semibold mt-4">{product.price}৳</p>
    </div>
  );
};

export default ProductDetails;
