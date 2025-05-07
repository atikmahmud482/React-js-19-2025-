import React from "react";

const Header = () => {
  return (
    <header className="fixed top-8 left-[10vw] w-[80vw] h-[90px] p-6 flex items-center justify-between gap-2 bg-[#0A0A0A1A] border border-[#FFFFFF1A] backdrop-blur-[30px] rounded-[80px] z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-white">
        Zorg<span className="text-blue-500">IT</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-white font-medium">
        <a href="#" className="hover:text-blue-500">
          Work
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Blog
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
