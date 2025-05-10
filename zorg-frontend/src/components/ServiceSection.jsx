import React from "react";
import ServiceCard from "./ServiceCard";
import textureImage from "../assets/back-cover.png";

import icon1 from "../assets/frame/Frame1.png";
import icon2 from "../assets/frame/Frame2.png";
import icon3 from "../assets/frame/Frame3.png";
import icon4 from "../assets/frame/Frame4.png";

const ServiceSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black">
      {/* Intro */}
      <div className="w-full max-w-[1140px] text-center px-4 mb-12">
        <p className="font-[Rethink Sans] font-medium text-[32px] sm:text-[20px] leading-[150%] text-white">
          We are a full-service studio creating transformative{" "}
          <span className="text-[#6D6D6D]">
            digital experiences and solutions.
          </span>{" "}
          Specializing in{" "}
          <span className="text-[#6D6D6D]">websites and web applications.</span>
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1140px] flex flex-wrap justify-center gap-6 px-4 lg:grid lg:grid-cols-4 lg:gap-6">
        <ServiceCard
          icon={icon1}
          title="All-In-One (AIO) Service"
          description="Our AIO solution tailors to your unique vision, crafting a website that truly reflects..."
          backgroundColor="#00FFB226"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={icon2}
          title="Project-Based Development"
          description="Ideal for agencies with ready designs, our service focuses on bringing..."
          backgroundColor="#00C2FF26"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={icon3}
          title="Scalable Dev Partnership"
          description="Our partnership is designed for businesses needing consistent development support..."
          backgroundColor="#E879F926"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={icon4}
          title="End-to-End Consulting"
          description="Our partnership is designed for businesses needing consistent development support..."
          backgroundColor="#FFA50026"
          textureImage={textureImage}
        />
      </div>
    </section>
  );
};

export default ServiceSection;
