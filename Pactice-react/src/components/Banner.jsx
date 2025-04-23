// Banner.jsx
import React from "react";

const Banner = () => {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-4 leading-tight">
            Discover Top-Quality Products at CloudCore Shop
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Browse our collection and enjoy fast delivery, secure checkout, and
            unbeatable support.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
            Shop Now
          </a>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src="https://via.placeholder.com/500x300?text=Product+Banner"
            alt="Banner"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
