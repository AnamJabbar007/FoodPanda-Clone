import React from "react";
import hero from "../assets/hero.png";
import { LocateFixed } from "lucide-react";
import styles from "../style";

const Hero = () => (
  <section className="relative overflow-hidden flex flex-col h-[300px] lg:h-[608px] md:min-h-[404px] hero-bgcolor">
    <div className="flex flex-col lg:pl-20 pl-0">
      <div className=" absolute top-0 lg:left-[50rem] md:left-[30rem] left-[13rem]  w-[70%] flex-1">
        <img className=" -z-1 h-full  object-cover" src={hero} alt="hero-bg" />
      </div>
      <div className="relative lg:mt-[13rem] md:mt-[10rem] mt-10 sm:mt-0">
        <h1 className=" lg:ml-0 ml-5 font-Montserrat text-grayfp lg:w-[746px] md:w-[500px] w-[200px]  text-[18px] font-bold leading-[28px] sm:text-[32px] sm:leading-[32px] lg:text-[48px] lg:leading-[55px]">
          It's the food and groceries you love, delivered
        </h1>
        <div className="flex lg:flex-row md:flex-row flex-col items-center p-4 rounded-[16px] shadow-top-bottom mt-8 w-full  max-w-[701px]">
          <div className=" w-full relative flex-col flex-grow rounded-[8px] flex items-center border border-gray-300">
            <input
              className="w-full h-[48px] pr-12 pl-4  text-gray-800 placeholder-gray-500 border-none rounded-[8px]"
              type="text"
              placeholder="Your street and street number"
            />
            <LocateFixed className="absolute right-[5.5rem] top-1/2 transform -translate-y-1/2 text-foodP h-5 w-5" />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[14px] font-semibold text-gray-800">
              Locate me
            </span>
          </div>
          <button
            className={`${styles.buttonstyle} w-full lg:w-[108px] md:w-[108px] lg:mt-0 mt-2 lg:ml-4`}
          >
            Find food
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
