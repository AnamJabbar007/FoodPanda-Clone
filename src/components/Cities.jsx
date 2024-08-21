import React from "react";
import { cities } from "../constants/index";
import styles from "../style";

const Cities = () => {
  return (
    <section className="p-4 md:p-10 md:pt-0">
      <div className="relative z-20 flex flex-col left-0 md:left-[2rem] text-black px-4 md:px-0 pb-10 mt-10 md:mt-20 bg-white">
        <h2 className={`${styles.heading2}`}>
          Find us in these cities and many more!
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-x-6 gap-y-8">
        {" "}
        {/* Increased the horizontal and vertical gap */}
        {cities.map((city) => (
          <div
            key={city.id}
            className="relative overflow-hidden lg:h-[250px] h-[100%] rounded-[18px] shadow-md mx-auto"
            style={{ width: "100%", maxWidth: "270px" }}
          >
            <img
              src={city.image}
              alt={city.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute m-4 rounded-lg bottom-0 bg-white  text-black p-2 text-center">
              <button className="text-base font-Montserrat font-semibold">
                {city.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cities;
