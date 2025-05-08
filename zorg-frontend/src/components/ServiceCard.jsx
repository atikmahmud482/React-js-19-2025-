import React from "react";
import arrowIcon from "../assets/project-file/Arrow Right Up.png";
import exampleIcon from "../assets/frame/Frame4.png";

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
        position: "relative",
      }}>
      {/* Background Texture (Blurred) */}
      <div
        style={{
          backgroundImage: `url(${textureImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          borderRadius: "5px",
          filter: "blur(2px)",
          zIndex: -6,
        }}></div>

      {/* Icon */}
      <img
        src={icon || exampleIcon}
        alt="Service Icon"
        className="w-[56px] h-[56px]"
        style={{ zIndex: 2 }}
      />

      {/* Title + Arrow */}
      <div
        className="flex justify-between items-center w-[238px]"
        style={{ zIndex: 2 }}>
        <h3 className="text-white font-semibold text-[20px]">{title}</h3>
        <img src={arrowIcon} alt="Arrow Icon" className="w-[40px] h-[40px]" />
      </div>

      {/* Description */}
      <p
        className="text-white text-left text-[16px] leading-[24px]"
        style={{ width: "238px", height: "58px", zIndex: 2 }}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
