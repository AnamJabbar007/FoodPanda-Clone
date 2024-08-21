import React, { useState } from "react";
import { Globe, ShoppingBag, ChevronDown, UserRound } from "lucide-react"; // Imported UserRound
import logo from "../assets/logo.svg"; // Replace with the correct path to your logo
import styles from "../style";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-xl h-[64px] px-6">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="foodpanda logo" className="h-8 mr-2" />
          <span className="text-pink-600 font-semibold text-xl">foodpanda</span>
        </div>

        {/* Toggle Button for Mobile Menu */}
        <button className="block md:hidden" onClick={toggleMenu}>
          <UserRound className="text-gray-800 h-6 w-6" />
        </button>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="open border border-gray-800 text-gray-800 h-[32px] w-[81.5px] text-[14px] font-semibold rounded-[8px]">
            Log in
          </button>
          <button className=" open h-[33px] w-[81.5px] bg-foodpanda text-white text-[14px] font-semibold border-none rounded-[8px]">
            Sign up
          </button>
          <div className="flex items-center space-x-1">
            <Globe className="text-gray-800 h-5 w-5" />
            <span className="text-gray-800">EN</span>
            <ChevronDown className="text-foodP h-6 w-6" />
          </div>
          <ShoppingBag className="text-gray-800 h-6 w-6" />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col justify-center items-center bg-white shadow-xl absolute top-16 left-0 right-0 z-50">
          <button className="open border border-gray-800 text-gray-800 h-[32px] w-[81.5px] text-[14px] font-semibold rounded-[8px]">
            Log in
          </button>
          <button className=" open h-[33px] mt-4  w-[81.5px] bg-foodpanda text-white text-[14px] font-semibold border-none rounded-[8px]">
            Sign up
          </button>
          <div className="block text-center py-4">
            <Globe className="text-gray-800 h-5 w-5 inline-block mr-2" />
            <span className="text-gray-800 inline-block">EN</span>
            <ChevronDown className="text-foodP h-6 w-6 inline-block" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
