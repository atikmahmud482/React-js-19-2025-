import React, { useState, useEffect } from "react";
import logo from "../assets/nav/navbar.png";

const NavBar = () => {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY < prevScrollY) {
      setVisible(true);
    } else {
      setVisible(false);
      setIsOpen(false); // close menu on scroll down
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`fixed top-[60px] left-[10vw] w-[80vw] px-6 py-4 bg-[#0A0A0A1A] border border-[#FFFFFF1A] backdrop-blur-[30px] rounded-[80px] z-50 transition-all duration-300 ${
        visible ? "-translate-y-11" : "-translate-y-14"
      } 
      sm:w-[90vw] sm:left-[5vw] sm:top-[40px] sm:px-4 sm:py-3
      md:w-[70vw] md:left-[15vw] md:top-[50px]
      lg:w-[60vw] lg:left-[20vw] lg:top-[60px]`}>
      <div className="flex items-center justify-between">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-8 sm:h-10" />

        {/* Hamburger Button (mobile only) */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none">
            &#9776;
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden sm:flex gap-6 text-white">
          {["Work", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-500"
              style={{
                fontFamily: "DM Sans",
                fontWeight: 500,
                fontSize: "16px",
                lineHeight: "150%",
              }}>
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="flex flex-col mt-4 gap-3 sm:hidden text-white">
          {["Work", "About", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-500 text-base"
              style={{ fontFamily: "DM Sans", fontWeight: 500 }}>
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
