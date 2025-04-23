import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="border rounded-xl shadow-md p-4 hover:shadow-lg transition-all">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">{product.price}৳</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
