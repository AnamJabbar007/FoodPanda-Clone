import React from "react";
import styles from "../style";
import office from "../assets/office.png";

const DFA = () => (
  <section
    className={`${styles.partnerSection} overflow-hidden relative w-full`}
  >
    {/* Heading Section */}
    <div className="relative z-20 flex flex-col left-0 md:left-[3rem] text-black px-4 md:px-8 pb-10 mt-10 md:mt-20 bg-white">
      <h1 className={`${styles.heading2}`}>Take your office out to lunch</h1>
    </div>

    {/* Background Image */}
    <div className="relative w-full h-72 md:h-[32rem] overflow-hidden">
      <img src={office} alt="office" className="w-full h-full object-cover" />
    </div>

    {/* Card Section */}
    <div className="relative z-30 flex justify-center md:justify-start left-0 md:left-[5rem] -mt-24 md:-mt-[12rem] mb-8">
      <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg max-w-full md:max-w-[636px] mx-4 md:mx-6">
        <h2 className="font-Montserrat text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-7 font-semibold mb-4">
          foodpanda for business
        </h2>
        <div className="w-full md:w-[550px] text-[14px] md:text-[16px] text-black">
          <p className="open mb-4">
            Order lunch or fuel for work-from-home, late nights in the office,
            corporate events, client meetings, and much more.
          </p>
        </div>
        <button className={`${styles.buttonstyle} my-3`}>Get started</button>
      </div>
    </div>
  </section>
);

export default DFA;
