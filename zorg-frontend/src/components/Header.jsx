import React, { useState, useEffect } from "react";

const Header = () => {
  // State to track the previous scroll position and show/hide header
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  // Handle scroll direction and visibility
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Check if scrolling up or down
    if (currentScrollY < prevScrollY) {
      setVisible(true); // Show header when scrolling up
    } else {
      setVisible(false); // Hide header when scrolling down
    }

    // Update the previous scroll position
    setPrevScrollY(currentScrollY);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header
      className={`fixed top-[60px] left-[10vw] w-[80vw] h-[90px] px-6 flex items-center justify-between gap-2 bg-[#0A0A0A1A] border border-[#FFFFFF1A] backdrop-blur-[30px] rounded-[80px] z-50 transition-all duration-300 ${
        visible ? "-translate-y-11" : "-translate-y-14"
      } 
      sm:w-[90vw] sm:left-[5vw] sm:top-[40px] sm:h-[70px] sm:px-4
      md:w-[70vw] md:left-[15vw] md:top-[50px] md:h-[80px] md:px-5
      lg:w-[60vw] lg:left-[20vw] lg:top-[60px] lg:h-[90px] lg:px-6`}>
      {/* Logo */}
      <div
        className="text-xl font-bold text-white"
        style={{ fontFamily: "DM Sans" }}>
        Zorg<span className="text-blue-500">IT</span>
      </div>

      {/* Navigation */}
      <nav className="flex gap-6 text-white">
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
              letterSpacing: "0%",
            }}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
