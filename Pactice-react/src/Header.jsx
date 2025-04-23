// Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      <div className="text-2xl font-bold text-blue-600">CloudCore Shop</div>

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

      <div className="md:hidden">
        <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
          {/* You can add a hamburger icon here */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 8h16M4 16h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
