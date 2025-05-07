import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";

const HeroSection = () => {
  return (
    <section className="w-full h-[768px] pt-[186px] bg-transparent flex flex-col justify-center items-center">
      <div className="w-full max-w-[740px] h-[388px] flex flex-col gap-[40px] text-center">
        <h1 className="text-[64px] font-bold leading-[120%] text-center text-white font-[Rethink Sans]">
          We Shape Your Ideas Into Awesome Digital Experience
        </h1>
        <p className="text-gray-300">We build pixel-perfect web experiences.</p>
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
      <div className="w-full max-w-[1140px] h-[80px] flex justify-between items-center mx-auto mt-12">
        {/* First logo with custom size and position */}
        <img
          src={logo1}
          alt="Logo 1"
          className="w-[163.92px] h-[42.6px] object-contain"
          style={{ position: "relative", top: "0px", left: "0px" }}
        />
        {/* Second logo with custom size and position */}
        <img
          src={logo2}
          alt="Logo 2"
          className="w-[163.92px] h-[42.6px] object-contain"
          style={{ position: "relative", top: "0px", left: "0px" }}
        />
        {/* Third logo with custom size and position */}
        <img
          src={logo3}
          alt="Logo 3"
          className="w-[114.95px] h-[40.96px] object-contain"
          style={{ position: "relative", top: "20px", left: "25px" }}
        />
        {/* Fourth logo with custom size and position */}
        <img
          src={logo4}
          alt="Logo 4"
          className="w-[88.98px] h-[40.96px] object-contain"
          style={{ position: "relative", top: "16px", left: "31px" }}
        />
        {/* Fifth logo with custom size and position */}
        <img
          src={logo5}
          alt="Logo 5"
          className="w-[146.36px] h-[30.96px] object-contain"
          style={{ position: "relative", top: "19px", left: "9px" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
