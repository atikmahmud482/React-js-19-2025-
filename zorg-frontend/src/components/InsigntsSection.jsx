import React from "react";
import arrowUp from "../assets/work/Arro up.png"; // Import the up arrow PNG image

const InsightsSection = () => {
  return (
    <section className="w-full flex justify-center py-16 bg-black px-4">
      <div
        className="w-full max-w-[1140px] flex flex-col gap-[48px]"
        style={{ height: "926px" }}>
        {/* Header */}
        <div className="text-center">
          <h2 className="text-white text-[48px] font-bold leading-[150%] font-[Rethink Sans]">
            Insights
          </h2>
          <p className="text-white mt-4 text-base">
            Discover our thoughts, tips, and updates on the latest in digital
            experiences.
          </p>
        </div>

        {/* Content Cards */}
        <div className="flex flex-col gap-[6px]">
          {/* Insight Card 1 */}
          <div
            className="w-full h-[88px] rounded-[8px] p-[24px] flex justify-between items-center text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
            }}>
            <div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}>
                1. How to Protect Your Identity While Traveling
              </h3>
            </div>
            <img
              src={arrowUp}
              alt="Up Arrow"
              className="w-[40px] h-[40px]" // Set the size of the arrow
            />
          </div>

          {/* Insight Card 2 */}
          <div
            className="w-full h-[88px] rounded-[8px] p-[24px] flex justify-between items-center text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
            }}>
            <div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}>
                2. How to Protect Your Identity While Traveling
              </h3>
            </div>
            <img
              src={arrowUp}
              alt="Up Arrow"
              className="w-[40px] h-[40px]" // Set the size of the arrow
            />
          </div>

          {/* Insight Card 3 */}
          <div
            className="w-full h-[88px] rounded-[8px] p-[24px] flex justify-between items-center text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
            }}>
            <div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}>
                3. How to Protect Your Identity While Traveling
              </h3>
            </div>
            <img
              src={arrowUp}
              alt="Up Arrow"
              className="w-[40px] h-[40px]" // Set the size of the arrow
            />
          </div>

          {/* Insight Card 4 */}
          <div
            className="w-full h-[88px] rounded-[8px] p-[24px] flex justify-between items-center text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
            }}>
            <div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}>
                4. How to Protect Your Identity While Traveling
              </h3>
            </div>
            <img
              src={arrowUp}
              alt="Up Arrow"
              className="w-[40px] h-[40px]" // Set the size of the arrow
            />
          </div>

          {/* Insight Card 5 */}
          <div
            className="w-full h-[88px] rounded-[8px] p-[24px] flex justify-between items-center text-white"
            style={{
              background:
                "linear-gradient(90deg, rgba(115, 191, 250, 0.2) 0%, rgba(10, 10, 10, 0) 100%)",
            }}>
            <div>
              <h3
                className="text-white"
                style={{
                  fontFamily: "Rethink Sans",
                  fontWeight: 600,
                  fontSize: "24px",
                  lineHeight: "120%",
                  letterSpacing: "0%",
                  verticalAlign: "middle",
                }}>
                5. How to Protect Your Identity While Traveling
              </h3>
            </div>
            <img
              src={arrowUp}
              alt="Up Arrow"
              className="w-[40px] h-[40px]" // Set the size of the arrow
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
