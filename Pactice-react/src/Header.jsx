// Header.jsx
import React, { useState } from "react";

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
          <a href="#" className="hover:text-blue-500 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Products
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-500 transition">
            Contact
          </a>
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
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2 text-gray-700 font-medium">
          <a href="#" className="block hover:text-blue-500">
            Home
          </a>
          <a href="#" className="block hover:text-blue-500">
            Products
          </a>
          <a href="#" className="block hover:text-blue-500">
            About
          </a>
          <a href="#" className="block hover:text-blue-500">
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
