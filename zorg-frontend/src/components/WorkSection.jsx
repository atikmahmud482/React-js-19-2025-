import React from "react";

const WorkSection = () => {
  return (
    <section className="w-full bg-black text-white py-10 flex flex-col items-center">
      {/* Max Width Wrapper */}
      <div className="w-full max-w-[1440px] flex flex-col items-center px-4">
        {/* H2 + P Text Block */}
        <div
          className="flex flex-col justify-center items-center text-center"
          style={{
            width: "600px",
            height: "195px",
          }}>
          <h2
            style={{
              fontFamily: "Rethink Sans",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "150%",
              letterSpacing: "-0.011em",
              textAlign: "center",
            }}>
            Our Most Recent Works
          </h2>
          <p className="text-[16px] text-gray-400 mt-4">
            Explore our recent projects and case studies crafted with precision.
          </p>
        </div>

        {/* Section Area: 1440x1126 */}
        <div
          className="relative mt-[85px] flex flex-col items-center"
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
            <div className="flex gap-0">
              {[1, 2].map((_, index) => (
                <div
                  key={index}
                  className="w-[554px] h-[566px] bg-gray-800 rounded-xl p-[24px] flex flex-col items-center">
                  <img
                    src="path-to-your-image.jpg"
                    alt={`Work ${index + 1}`}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />
                  <p className="text-white text-center mt-4">
                    Project {index + 1} Description
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                    View Details
                  </button>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Cards */}
            <div className="flex gap-0">
              {[3, 4, 5].map((_, index) => (
                <div
                  key={index}
                  className="w-[364px] h-[372px] bg-gray-800 rounded-xl p-[16px] flex flex-col items-center">
                  <img
                    src="path-to-your-image.jpg"
                    alt={`Work ${index + 3}`}
                    className="w-full h-2/3 object-cover rounded-xl"
                  />
                  <p className="text-white text-center mt-4">
                    Project {index + 3} Description
                  </p>
                  <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
