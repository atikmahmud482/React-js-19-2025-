import React from "react";
import arrowIcon from "../assets/Arrow Right Up.png"; // Replace with your arrow icon
import exampleIcon from "../assets/frame.png"; // Replace with your icon

const ServiceCard = ({
  icon,
  title,
  description,
  backgroundColor,
  textureImage,
}) => {
  return (
    <div
      className="w-[286px] h-[314px] rounded-[15px] border p-6 flex flex-col gap-10"
      style={{
        backgroundColor: backgroundColor || "#E879F926",
        borderWidth: "1.4px",
        position: "relative", // Added to allow absolute positioning of the overlay
      }}>
      {/* Background Texture (Blurred) */}
      <div
        style={{
          backgroundImage: `url(${textureImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute", // Position the texture image behind the card content
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "5px", // Keep rounded corners for texture image
          filter: "blur(5px)", // Apply blur effect
          zIndex: 1, // Ensure the texture is behind other elements
        }}></div>

      {/* Icon */}
      <img
        src={icon || exampleIcon}
        alt="Service Icon"
        className="w-[56px] h-[56px]"
      />

      {/* Title + Arrow */}
      <div className="flex justify-between items-center w-[238px]">
        <h3 className="text-white font-semibold text-[20px]">{title}</h3>
        <img src={arrowIcon} alt="Arrow Icon" className="w-[40px] h-[40px]" />
      </div>

      {/* Description */}
      <p
        className="text-white text-left text-[16px] leading-[24px]"
        style={{ width: "238px", height: "58px" }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
