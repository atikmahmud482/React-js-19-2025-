import React from "react";
import facebookIcon from "../assets/social/facebook.png";
import twitterIcon from "../assets/social/twitter.png";
import linkedinIcon from "../assets/social/linkedin.png";
import YoutubeIcon from "../assets/social/youtube.png";

const FooterSection = () => {
  return (
    <footer className="w-full bg-[#0A0A0A1A] backdrop-blur-[30px] border-t border-[#FFFFFF1A] text-white px-4 py-12 md:px-[150px] md:py-[48px]">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 max-w-[1140px] mx-auto text-center md:text-left">
        {/* Left Section */}
        <div className="w-full md:max-w-[521px] flex flex-col gap-[30px] items-center md:items-start">
          {/* Top Part */}
          <div className="flex flex-col justify-center gap-[8px]">
            <p
              className="text-[20px]"
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 700,
                lineHeight: "120%",
              }}>
              Have a project in mind?
            </p>
            <p
              className="text-[48px] md:text-[64px]"
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 700,
                lineHeight: "120%",
                color: "#93D1FD",
              }}>
              Let's Talk
            </p>
          </div>

          {/* Email */}
          <div>
            <h1
              className="text-[32px] md:text-[40px]"
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 700,
                lineHeight: "120%",
              }}>
              hey@pixll.com
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:max-w-[358px] flex flex-col items-center md:items-end gap-[32px]">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold mb-4">
              Social Links
            </h3>
            <div className="flex flex-col gap-4">
              {[
                ["Facebook", facebookIcon],
                ["Twitter", twitterIcon],
                ["LinkedIn", linkedinIcon],
                ["Instagram", YoutubeIcon],
              ].map(([name, icon]) => (
                <div
                  key={name}
                  className="flex items-center gap-2 justify-center">
                  <img
                    src={icon}
                    alt={name}
                    className="w-6 h-6 filter invert"
                  />
                  <span className="text-sm">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-2 text-center text-sm text-white/60">
        &copy; {new Date().getFullYear()} Atik-Al-Mahmud. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
