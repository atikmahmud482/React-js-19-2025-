import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for React Router

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">CloudCore Shop</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-500 transition">
            Home
          </Link>
          <Link to="/products" className="hover:text-blue-500 transition">
            Products
          </Link>
          <Link to="/about" className="hover:text-blue-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-500 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-500 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div
        className={`${
          menuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        } md:hidden mt-3 text-gray-700 font-medium transition-all duration-500 overflow-hidden px-6 text-right space-y-3`}>
        <Link to="/" className="block hover:text-blue-500">
          Home
        </Link>
        <Link to="/products" className="block hover:text-blue-500">
          Products
        </Link>
        <Link to="/about" className="block hover:text-blue-500">
          About
        </Link>
        <Link to="/contact" className="block hover:text-blue-500">
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
