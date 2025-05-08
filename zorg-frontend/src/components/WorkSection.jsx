import React from "react";
import image1 from "../assets/work/image1.png";
import image2 from "../assets/work/image2.png";
import image3 from "../assets/work/image3.png";
import image4 from "../assets/work/image4.png";
import image5 from "../assets/work/image5.png";

const topProjects = [
  {
    image: image1,
    title: "Alcohol Tracker",
    description:
      "A modern revamp of an online retail store to enhance UX and boost conversions.",
  },
  {
    image: image2,
    title: "Finance Website",
    description:
      "A responsive and scalable dashboard for real-time analytics and performance tracking.",
  },
];

const bottomProjects = [
  {
    image: image3,
    title: "Finance Website",
    description:
      "A sleek, mobile-first landing page to increase app downloads and engagement.",
  },
  {
    image: image4,
    title: "Alcohol Tracker",
    description:
      "A clean and bold layout tailored for photographers and visual artists.",
  },
  {
    image: image5,
    title: "Rely",
    description:
      "Frontend interface for a secure and intuitive financial tracking application.",
  },
];

const WorkSection = () => {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-black px-4">
      {/* Title and Description */}
      <div className="w-full max-w-[600px] text-center mb-12">
        <h2 className="font-[Rethink Sans] font-bold text-[32px] sm:text-[40px] md:text-[48px] leading-[150%] text-white">
          Our Most Recent Works
        </h2>
        <p className="text-white mt-4 text-sm sm:text-base">
          Take a look at some of our latest digital products crafted for clients
          worldwide.
        </p>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-12">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center md:items-stretch">
          {topProjects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[554px] h-auto rounded-xl p-6 bg-[#1e1e1e] flex flex-col justify-between">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[250px] sm:h-[300px] object-cover rounded-xl mb-6"
              />
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-[14px] sm:text-[16px] mb-6">
                  {project.description}
                </p>
                <button className="text-white border border-white rounded-full px-6 py-3 w-fit hover:bg-white hover:text-black transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-6 w-full justify-center items-center md:items-stretch">
          {bottomProjects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[364px] h-auto rounded-xl p-4 bg-[#1e1e1e] flex flex-col justify-between">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover rounded-xl mb-4"
              />
              <div className="text-white">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-[14px] mb-3">{project.description}</p>
                <button className="text-white border border-white rounded-full px-6 py-3 w-fit hover:bg-white hover:text-black transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#73BFF9] text-white font-bold text-base rounded-[48px] w-[201px] h-[72px] flex items-center justify-center"
            style={{
              paddingTop: "20px",
              paddingRight: "32px",
              paddingBottom: "20px",
              paddingLeft: "32px",
            }}>
            See More
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
