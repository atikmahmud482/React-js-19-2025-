import React from "react";

const WorkSection = () => {
  return (
    <section className="w-full bg-black text-white py-10 flex flex-col items-center">
      {/* Max Width Container */}
      <div className="w-full max-w-[1440px] flex flex-col items-center px-4">
        {/* Header Section with h2 and p */}
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
          <p className="text-[16px] md:text-[18px] text-gray-400 mt-4">
            Explore our recent projects and case studies crafted with precision.
          </p>
        </div>

        {/* Work Cards Section */}
        <div className="w-full mt-10">
          {/* Top Row with 2 Cards */}
          <div className="flex justify-between gap-[8px]">
            <div className="w-[554px] h-[566px] bg-gray-800 rounded-xl flex flex-col items-center p-[24px]">
              <img
                src="path-to-your-image.jpg"
                alt="Work 1"
                className="w-full h-2/3 object-cover rounded-xl"
              />
              <p className="text-white text-center mt-4">
                Project 1 Description: A brief overview of the project and its
                features.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                View Details
              </button>
            </div>

            <div className="w-[554px] h-[566px] bg-gray-800 rounded-xl flex flex-col items-center p-[24px]">
              <img
                src="path-to-your-image.jpg"
                alt="Work 2"
                className="w-full h-2/3 object-cover rounded-xl"
              />
              <p className="text-white text-center mt-4">
                Project 2 Description: A brief overview of the project and its
                features.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                View Details
              </button>
            </div>
          </div>

          {/* Bottom Row with 3 Cards */}
          <div className="flex justify-between gap-[5.27px] mt-6">
            <div className="w-[364px] h-[372px] bg-gray-800 rounded-xl flex flex-col items-center p-[16px]">
              <img
                src="path-to-your-image.jpg"
                alt="Work 3"
                className="w-full h-2/3 object-cover rounded-xl"
              />
              <p className="text-white text-center mt-4">
                Project 3 Description: A brief overview of the project and its
                features.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                View Details
              </button>
            </div>

            <div className="w-[364px] h-[372px] bg-gray-800 rounded-xl flex flex-col items-center p-[16px]">
              <img
                src="path-to-your-image.jpg"
                alt="Work 4"
                className="w-full h-2/3 object-cover rounded-xl"
              />
              <p className="text-white text-center mt-4">
                Project 4 Description: A brief overview of the project and its
                features.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                View Details
              </button>
            </div>

            <div className="w-[364px] h-[372px] bg-gray-800 rounded-xl flex flex-col items-center p-[16px]">
              <img
                src="path-to-your-image.jpg"
                alt="Work 5"
                className="w-full h-2/3 object-cover rounded-xl"
              />
              <p className="text-white text-center mt-4">
                Project 5 Description: A brief overview of the project and its
                features.
              </p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
