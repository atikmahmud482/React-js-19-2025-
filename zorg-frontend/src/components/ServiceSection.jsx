import React from "react";
import ServiceCard from "./ServiceCard";
import exampleIcon from "../assets/frame.png";
import textureImage from "../assets/back-cover.png"; // Replace with your texture image path

const ServiceSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black">
      {/* Intro */}
      <div className="max-w-[1140px] w-full h-[180px] text-center px-4">
        <p className="font-[Rethink Sans] font-medium text-[40px] leading-[150%] text-white">
          We are a full-service studio creating transformative{" "}
          <span style={{ color: "#6D6D6D" }}>
            digital experiences and solutions.
          </span>{" "}
          Specializing in{" "}
          <span style={{ color: "#6D6D6D" }}>
            websites and web applications.
          </span>
        </p>
      </div>

      {/* Cards */}
      <div className="w-[1140px] h-[427px] rounded-xl mt-8 flex justify-center items-center gap-2">
        <ServiceCard
          icon={exampleIcon}
          title="Web Design"
          description="Crafting visually stunning websites."
          backgroundColor="#E879F926"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={exampleIcon}
          title="UI/UX Design"
          description="Designing seamless user experiences."
          backgroundColor="#00C2FF26"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={exampleIcon}
          title="Web Development"
          description="Building scalable, high-performance websites."
          backgroundColor="#00FFB226"
          textureImage={textureImage}
        />
        <ServiceCard
          icon={exampleIcon}
          title="App Development"
          description="Creating modern mobile applications."
          backgroundColor="#FFA50026"
          textureImage={textureImage}
        />
      </div>
    </section>
  );
};

export default ServiceSection;
