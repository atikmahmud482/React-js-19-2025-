import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 mt-10 border-t">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">
            CloudCore Shop
          </h2>
          <p className="text-sm">
            Delivering quality products to your doorstep with care and speed.
            Your satisfaction is our priority.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-500">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/faqs" className="hover:text-blue-500">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/shipping-returns" className="hover:text-blue-500">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-blue-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-blue-500">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-blue-600 mb-2">
            Get in Touch
          </h3>
          <p className="text-sm">Email: support@cloudcore.shop</p>
          <p className="text-sm">Phone: +880 1234 567890</p>
          <p className="text-sm">Address: Dhaka, Bangladesh</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t pt-4">
        &copy; {new Date().getFullYear()} CloudCore Shop. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
