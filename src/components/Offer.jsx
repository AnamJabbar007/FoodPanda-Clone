import React from "react";
import styles from "../style";
import phones from "../assets/phones.png";
import scan from "../assets/scan.png";
import Apple from "../assets/apple.svg";
import google from "../assets/google.svg";
import gallery from "../assets/galleryApps.svg";

const Offer = () => {
  return (
    <section className="overflow-hidden relative w-full">
      <div className="relative -z-1 flex flex-col left-0 md:left-[3rem] text-black px-4 md:px-8 pb-10 mt-10 md:mt-20 bg-white">
        <h1 className={`${styles.heading2}`}>Put us in your pocket</h1>
      </div>
      {/* Background Image */}
      <div className="relative flex  pb-[5rem] -z-1 items-center justify-center w-full">
        <div className=" flex flex-col md:flex-row items-center justify-center px-4 md:px-12 bg-foodpanda rounded-2xl w-[93%] h-[530px] md:pt-0 pt-[10rem] md:h-72 lg:h-[22rem] relative">
          <div className="flex flex-col  py-[3rem] gap-5 items-center md:items-start text-center md:text-left">
            <h2 className="font-Montserrat text-white text-[1.25rem] md:text-[1.5rem] leading-6 md:leading-7 font-semibold mb-4">
              Download the food and groceries you love
            </h2>
            <div className="flex items-center md:flex-row flex-col gap-5">
              <div className="w-[100px] p-2 hidden md:block  border border-white rounded-md">
                <img className="" src={scan} alt="scan" />
              </div>
              <p className="text-white text-[14px] md:text-[18px] w-[345px]">
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </p>
            </div>
            <div className="flex items-center justify-center flex-wrap gap-4">
              <img src={Apple} alt="Apple" />
              <img src={google} alt="google" />
              <img src={gallery} alt="App-Gallery" />
            </div>
          </div>
          <div className=" relative left-8 md:left-[5rem] ">
            <img
              className="max-w-[80%] z-10 mb-[5rem]"
              src={phones}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
