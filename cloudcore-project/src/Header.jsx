import React from "react";
import { Link } from "react-router-dom"; // Import Link
import { useSelector } from "react-redux";

const Header = () => {
  const cartItemCount = useSelector((state) => state.cart.items.length);

  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold hover:text-gray-300">
          YourLogo
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/products" className="hover:text-gray-300">
            Products
          </Link>
          <Link to="/about" className="hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300">
            Contact
          </Link>
        </nav>
        <div className="relative">
          <Link
            to="/cart"
            className="text-white flex items-center space-x-2 hover:text-gray-300">
            <span className="material-icons">shopping_cart</span>
            <span className="absolute top-0 right-0 text-xs bg-red-500 text-white rounded-full px-2 py-1">
              {cartItemCount}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
