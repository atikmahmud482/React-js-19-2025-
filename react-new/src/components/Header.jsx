import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 text-white ">
      {" "}
      {/* Reduced padding */}
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          {" "}
          {/* Reduced gap */}
          <div className="p-1 rounded-full">
            {" "}
            {/* Reduced padding */}
            <img
              src="/logo.png"
              alt="Movie Finder Icon"
              className="w-6 h-6"
            />{" "}
            {/* Reduced icon size */}
          </div>
          <h1 className="text-xl font-bold">Movie Finder</h1>{" "}
          {/* Reduced font size */}
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          {" "}
          {/* Reduced gap */}
          <p className="hidden md:block text-base">About</p>{" "}
          {/* Reduced font size */}
          {/* Profile Icon */}
          <div className="relative">
            <FaUserCircle size={24} /> {/* Reduced icon size */}
            <div className="absolute top-0 right-0 bg-green-500 w-2 h-2 rounded-full"></div>{" "}
            {/* Reduced active indicator size */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
