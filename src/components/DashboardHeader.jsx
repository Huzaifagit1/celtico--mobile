import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdNotificationsOutline } from "react-icons/io";
import logo from "../assets/images/celtic-logo.png"
import profilePic from "../assets/images/profile-pic.png"

const Header = () => {
  return (
      <header className="p-4 bg-white shadow-sm ">
          <div className='flex justify-between items-center mx-auto w-[100%] sm:w-[90%]'>
      {/* Left Section: Logo */}
      <div className="flex items-center">
          <Link to={"/"}>
            <img
            src={logo}  // Replace with your logo path
            alt="Celtic Mobile Logo"
            className="h-4 sm:h-6 cursor-pointer"
          />
          </Link>
      </div>

      {/* Right Section: Notification and Profile */}
      <div className="flex items-center justify-end space-x-6">
        {/* Notification */}
        <div className="flex items-center justify-center space-x-2 text-sm max-sm:hidden">
                <IoMdNotificationsOutline />
          <span className="text-gray-500 text-sm">Notification</span>
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-3 max-md:text-xs">
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-600">
                <img src={profilePic} alt="profilePic" />
            </span>
          </div>
          <div className='flex flex-col max-md:text-xs'>
            <div className="text-gray-600 font-medium">Tynisha Obey</div>
          <div className="text-gray-400 text-sm">Demo@gmail.com</div>
          </div>

        </div>
              </div>
              </div>
    </header>
  );
};

export default Header;
