import React from "react";
import ProfilePic from "./assets/profile-picture.png";

function Card() {
  return (
    <div className="card">
      <img src={ProfilePic} alt="Profile Picture" />
      <h2>Atik-Al-Mahmud</h2>
      <p>I am a Front-End Developer.</p>
    </div>
  );
}

export default Card;
