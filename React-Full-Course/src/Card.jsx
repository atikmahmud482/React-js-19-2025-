import React from "react";
import ProfilePic from "./assets/profile-picture.png";

function Card() {
  return (
    <div className="card">
      <img className="card-image" src={ProfilePic} alt="Profile Picture" />
      <h2 className="card-title">Atik-Al-Mahmud</h2>
      <p className="card-text">I am a Front-End Developer.</p>
    </div>
  );
}

export default Card;
