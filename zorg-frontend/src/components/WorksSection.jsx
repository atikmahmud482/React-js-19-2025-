import React from "react";
import work1 from "../assets/first-work/image1.png";
import work2 from "../assets/first-work/image3.png";
import work3 from "../assets/first-work/image2.png";

const WorksSection = () => {
  return (
    <section className="w-full py-16 bg-transparent flex justify-center items-center">
      <div className="max-w-[1140px] w-full flex flex-col md:flex-row justify-between items-center gap-8 px-4">
        {/* Work 1 */}
        <img
          src={work1}
          alt="Work 1"
          className="w-full md:w-[30%] h-auto object-cover rounded-[24px] border-[5px] "
        />
        {/* Work 2 */}
        <img
          src={work2}
          alt="Work 2"
          className="w-full md:w-[30%] h-auto object-cover rounded-[24px] border-[5px] "
        />
        {/* Work 3 */}
        <img
          src={work3}
          alt="Work 3"
          className="w-full md:w-[30%] h-auto object-cover rounded-[24px] border-[5px] "
        />
      </div>
    </section>
  );
};

export default WorksSection;
