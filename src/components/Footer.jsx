import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

import {
  footerLinks1,
  pressLinks,
  careerLinks,
  citiesLinks,
} from "../constants";

const Footer = () => (
  <footer className="md:mx-[5rem] mx-4 py-8 bg-white border-t">
    {/* Horizontal Links (Countries) */}
    <div className="">
      <ul className="flex flex-wrap justify-center space-x-4 text-grayfp text-sm  border-b pb-4">
        {footerLinks1.map((link, index) => (
          <li key={index}>
            <a
              className={`underline hover:underline-offset-8  open text-[16px] font-semibold px-4  border-r-neutral-500 ${
                index !== footerLinks1.length - 1 ? "border-r" : "border-none"
              }`}
              href={link.href}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Vertical Links (Footer Sections) */}
    <div className="flex flex-col justify-center items-center ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:text-start text-center mt-8 gap-4">
        <div className="text-gray-600 hidden md:block  open text-[16px] font-semibold ">
          &copy; 2024 foodpanda
        </div>

        <div>
          <ul className="space-y-2">
            {pressLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="underline hover:underline-offset-8  open text-[16px] font-semibold pr-4 "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            {careerLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="underline hover:underline-offset-8  open text-[16px] font-semibold pr-4 "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            {citiesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="underline hover:underline-offset-8  open text-[16px] font-semibold pr-4 "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-gray-600 block md:hidden pt-4  open text-[16px] font-semibold ">
        &copy; 2024 foodpanda
      </div>
    </div>

    {/* Logos and Social Media Icons */}
    <div className="flex flex-col border-t pt-4 sm:flex-row justify-between items-center mt-8">
      <div className="flex space-x-2 items-center">
        <img src={logo} alt="foodpanda logo" className="h-6" />
        <span className="text-pink-600 font-semibold text-xl">foodpanda</span>
      </div>

      <div className="flex space-x-4 mt-4 sm:mt-0">
        <div className="border flex border-gray-500 w-8 h-8 rounded-full">
          <img src={facebook} alt="Facebook" className="h-8" />
        </div>
        <div className="border flex justify-center items-center border-gray-500 w-8 h-8 rounded-full">
          <img src={instagram} alt="Instagram" className="h-5" />
        </div>
        {/* Add more social media icons here if needed */}
      </div>
    </div>
  </footer>
);

export default Footer;
