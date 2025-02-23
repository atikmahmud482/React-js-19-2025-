import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa"; // Importing icons

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:text-left">
          <div className="text-center md:text-left">
            <p className="text-lg font-bold">Movie Finder</p>
            <p className="mt-2">
              Your go-to place for discovering great movies!
            </p>
            <p className="mt-2">
              &copy; 2025 Movie Finder. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 md:mt-0 text-xl">
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaTwitter />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-yellow-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:underline hover:text-yellow-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline hover:text-yellow-300">
              Terms of Service
            </a>
            <a href="#" className="hover:underline hover:text-yellow-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
