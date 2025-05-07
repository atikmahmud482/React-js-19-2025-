import React from "react";

const WorkSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black">
      {/* Title and Description */}
      <div
        className="flex flex-col items-center text-center"
        style={{ width: "600px", height: "195px" }}>
        <h2
          className="font-[Rethink Sans] font-bold text-[48px] leading-[150%] text-white"
          style={{ letterSpacing: "-1.1%" }}>
          Our Most Recent Works
        </h2>
        <p className="text-white mt-4">
          Take a look at some of our latest digital products crafted for clients
          worldwide.
        </p>
      </div>

      {/* Container Area: 1440x1126 */}
      <div
        className="relative  flex flex-col items-center"
        style={{
          width: "1440px",
          height: "1126px",
        }}>
        {/* Inner Box: 1140x970 */}
        <div
          className="flex flex-col gap-[32px]"
          style={{
            width: "1140px",
            height: "970px",
            marginTop: "135px",
            marginLeft: "149.96px",
          }}>
          {/* Top Row - 2 Cards */}
          <div className="flex gap-[32px]">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="w-[554px] h-[566px] bg-gray-800 rounded-xl p-[24px] flex flex-col">
                <img
                  src="path-to-your-image.jpg"
                  alt={`Work ${index + 1}`}
                  className="w-full h-[60%] object-cover rounded-xl mb-6"
                />
                <p className="text-white text-left text-[16px] mb-4">
                  Project {index + 1} description goes here. Clear and concise.
                </p>
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md self-start">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Bottom Row - 3 Cards */}
          <div className="flex gap-[24px]">
            {[3, 4, 5].map((_, index) => (
              <div
                key={index}
                className="w-[364px] h-[372px] bg-gray-800 rounded-xl p-[16px] flex flex-col">
                <img
                  src="path-to-your-image.jpg"
                  alt={`Work ${index + 3}`}
                  className="w-full h-[60%] object-cover rounded-xl mb-4"
                />
                <p className="text-white text-left text-[14px] mb-3">
                  Project {index + 3} details presented here briefly.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md self-start">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
