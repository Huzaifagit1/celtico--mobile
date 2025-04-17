import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // React Icons for the hamburger and close icons
import logo from "../assets/images/celtic-mobile-logo.png"; // Your logo
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu visibility
  const [scrolled, setScrolled] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

    // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`text-white fixed top-0 left-0 w-full z-20 py-4 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      } bg-opacity-70`}>
      <div className="flex justify-between items-center w-[90%] md:w-[80%] mx-auto">
        {/* Logo */}
        <div className="w-[25%] md:w-[20%]">
          <Link to={"/"}>
            <img className='w-60 md:w-40' src={logo} alt="Celtic Mobile Logo" />
          </Link>
        </div>

        {/* Menu Toggle Button for mobile */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex w-[55%] xl:w-[45%] justify-between">
          <div className="cursor-pointer"><Link to={"/"}>Home</Link></div>
          <div className="cursor-pointer"><a href="#plans">Plans</a></div>
          <div className="cursor-pointer"><a href="#how-it-works">How It Works</a></div>
          <div className="cursor-pointer"><a href="#why-choose-us">Why Choose Us?</a></div>
          <div className="cursor-pointer">
            <Link to={"/"}>
              Purchase Now
            </Link>
          </div>
        </div>

        {/* Contact and Language buttons */}
        <div className="hidden lg:flex w-[30%] justify-between">
          <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md cursor-pointer whitespace-nowrap"><Link to={"/login"}>Login</Link></div>
          <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md cursor-pointer whitespace-nowrap ml-2"><a href="#contact-us">Contact Us</a></div>
          <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md cursor-pointer ml-2 whitespace-nowrap flex items-center">English <IoIosArrowDown className='ml-2' /></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center bg-black bg-opacity-90 w-[100%] py-4 h-[100vh]">
          <div className="cursor-pointer py-2"><Link to={"/"}>Home</Link></div>
          <div className="cursor-pointer py-2"><a href="#plans">Plans</a></div>
          <div className="cursor-pointer py-2"><a href="#how-it-works">How It Works</a></div>
          <div className="cursor-pointer py-2"><a href="#why-choose-us">Why Choose Us?</a></div>
          <div className="cursor-pointer py-2">
            <Link to={"/"}>
              Purchase Now
            </Link>
          </div>
          <div className="flex flex-col items-center mt-4 w-[80%]">
            <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md mb-2 cursor-pointer"><Link to="/login">Login</Link></div>
            <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md mb-2 cursor-pointer"><a href="#contact-us">Contact Us</a></div>
            <div className="bg-[#0B8D46] text-white px-6 py-2 rounded-md cursor-pointer">English</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
