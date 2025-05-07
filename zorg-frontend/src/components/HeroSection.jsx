import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import bannerImage from "../assets/frame/banner.jpg";

const HeroSection = () => {
  return (
    <section
      className="w-full pt-[140px] bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="w-full max-w-[740px] h-[388px] flex flex-col gap-[40px] text-center">
        <h1 className="text-[40px] sm:text-[28px] font-bold leading-[120%] text-center text-white font-[Rethink Sans]">
          We Shape Your Ideas Into Awesome Digital Experience
        </h1>
        <p className="text-gray-300 text-lg sm:text-sm px-4 sm:px-2">
          We build pixel-perfect web experiences.
        </p>

        <div className="flex justify-center">
          <button
            className="w-[231px] h-[64px] px-[32px] py-[20px] gap-2 rounded-[48px] 
            text-white font-semibold 
            bg-gradient-to-r from-[#73BFFA] to-[#3C97F5]">
            Get Started
          </button>
        </div>
      </div>

      {/* Logo section directly under the button */}
      <div className="w-full max-w-[1140px] flex flex-wrap justify-center items-center gap-x-[20px] gap-y-4 mt-6 px-4">
        <img
          src={logo3}
          alt="Logo 1"
          className="w-[160px] h-[42px] object-contain sm:w-[120px] sm:h-[32px]"
        />
        <img
          src={logo2}
          alt="Logo 2"
          className="w-[160px] h-[42px] object-contain sm:w-[120px] sm:h-[32px]"
        />
        <img
          src={logo1}
          alt="Logo 3"
          className="w-[110px] h-[40px] object-contain sm:w-[90px] sm:h-[30px]"
        />
        <img
          src={logo4}
          alt="Logo 4"
          className="w-[90px] h-[40px] object-contain sm:w-[70px] sm:h-[28px]"
        />
        <img
          src={logo5}
          alt="Logo 5"
          className="w-[140px] h-[30px] object-contain sm:w-[110px] sm:h-[24px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
