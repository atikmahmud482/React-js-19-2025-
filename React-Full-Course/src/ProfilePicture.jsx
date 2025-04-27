import React from "react";
import ProfilePic from "./assets/profile-picture.png";

function ProfilePicture() {
  const imageUrl = ProfilePic;
  const handleClick = (e) => {
    e.target.style.display = "none";
  };
  return <img onClick={(e) => handleClick(e)} src={imageUrl} alt="" />;
}

export default ProfilePicture;
