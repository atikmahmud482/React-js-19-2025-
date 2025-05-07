import React from "react";
import facebookIcon from "../assets/social/facebook.png";
import twitterIcon from "../assets/social/twitter.png";
import linkedinIcon from "../assets/social/linkedin.png";
import YoutubeIcon from "../assets/social/youtube.png";

const FooterSection = () => {
  return (
    <footer className="w-full bg-black text-white px-4 py-12 md:px-[150px] md:py-[48px]">
      <div className="flex flex-col md:flex-row justify-between gap-12 max-w-[1140px] mx-auto">
        {/* Left Section */}
        <div className="w-full md:max-w-[521px] flex flex-col gap-[30px]">
          {/* Top Part */}
          <div className="h-auto flex flex-col justify-center gap-[8px]">
            <p
              className="text-white text-[20px]"
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 700,
                lineHeight: "120%",
              }}>
              Have a project in mind?
            </p>
            <p
              style={{
                fontFamily: "Rethink Sans",
                fontWeight: 700,
                fontSize: "48px", // Responsive scaling
                lineHeight: "120%",
                color: "#93D1FD",
              }}
              className="md:text-[64px]">
              Let's Talk
            </p>
          </div>

          {/* Bottom Part */}
          <div className="w-full md:w-[427px] h-auto">
            <h1
              className="text-white text-[32px] md:text-[40px]"
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
        <div className="w-full md:max-w-[358px] flex flex-col items-start md:items-end gap-[32px]">
          <div>
            <h3 className="text-[20px] md:text-[24px] font-semibold text-white mb-4">
              Social Links
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-6 h-6 filter invert"
                />

                <span className="text-sm">Facebook</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-6 h-6 filter invert"
                />

                <span className="text-sm">Twitter</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={linkedinIcon}
                  alt="Linkedin"
                  className="w-6 h-6 filter invert"
                />

                <span className="text-sm">LinkedIn</span>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src={YoutubeIcon}
                  alt="Instagram"
                  className="w-6 h-6 filter invert"
                />

                <span className="text-sm">Instagram</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
