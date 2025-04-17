import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaRegEdit } from 'react-icons/fa';
import logo from "../assets/images/celtic-logo.png";
import { MdLegendToggle } from "react-icons/md";
import { FiPhone, FiMessageSquare, FiBarChart2, FiChevronDown, FiFileText } from "react-icons/fi";
import { MdOutlineDashboard, MdPayments } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbSettingsDollar } from "react-icons/tb";
import { ImHistory } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";

const DMyProfile = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSidebarActiveTab(tabName);
    };
    
    const [sidebarActiveTab, setSidebarActiveTab] = useState("MyProfile");


  const [openName, setOpenName] = useState(true);
  const [openAddress, setOpenAddress] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openConsent, setOpenConsent] = useState(false);

  const toggleSection = (section) => {
    if (section === 'name') setOpenName(!openName);
    if (section === 'address') setOpenAddress(!openAddress);
    if (section === 'email') setOpenEmail(!openEmail);
    if (section === 'consent') setOpenConsent(!openConsent);
  };



  return (
    <div className="flex w-full h-[87vh]">
      {/* Left Sidebar */}
      <div
        className={`fixed md:relative inset-0 bg-white text-gray-800 p-4 transition-all ease-in-out duration-300 
        ${isSidebarOpen ? 'w-full z-10' : 'hidden md:block'} md:w-[20%] border-r border-gray-300`}
        style={{ top: '0', left: isSidebarOpen ? '0' : 'auto', bottom: '0', right: 'auto' }}
      >
        {/* Close Icon (Only visible on mobile when sidebar is open) */}
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 text-gray-800 text-2xl"
          >
            &times; {/* This is the "X" icon */}
          </button>
        )}

        <h2 className="text-xl font-semibold mb-6 text-green-500">
          <Link to={"/"}>
            <img className='md:hidden w-28' src={logo} alt="logo" />
          </Link>
        </h2>
        
        <ul className="space-y-2">
          <li
            className={`cursor-pointer ${
              sidebarActiveTab === "Dashboard" ? "text-green-500 font-semibold" : "text-gray-600 "
            }`}
            onClick={() => handleTabClick("Dashboard")}
          >
            <Link to={"/dashboard"} className='flex items-center space-x-4 p-2 rounded-md'>
              <MdOutlineDashboard className='text-green-500 ' />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer bg-[#0B8D4624] p-2 rounded-md ${
              sidebarActiveTab === "MyProfile" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("MyProfile")}
          >
            <Link to={"/my-profile"} className='flex items-center space-x-4 '>
              <PiNotepad className='text-green-500 ' />
              <span>My Profile</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer ${
              sidebarActiveTab === "ManageYourSIM" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("ManageYourSIM")}
          >
            <Link to={"/manage-sim"} className='flex items-center space-x-4 p-2 rounded-md'>
              <TbSettingsDollar className='text-green-500' />
              <span>Manage Your SIM</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer ${
              sidebarActiveTab === "PaymentMethod" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("PaymentMethod")}
          >
            <Link to={"/payment-method"} className='flex items-center space-x-4 p-2 rounded-md'>
              <MdPayments className='text-green-500' />
              <span>Payment Method</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer ${
              sidebarActiveTab === "PaymentHistory" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("PaymentHistory")}
          >
            <Link to={"/payment-history"} className='flex items-center space-x-4 p-2 rounded-md'>
              <ImHistory className='text-green-500' />
              <span>Payment History</span>
            </Link>
          </li>
        </ul>

        <div className="absolute bottom-8 left-4 text-gray-600 p-2 rounded-md">
          <p className=' cursor-pointer'>Need help?</p>
          <button className="text-red-600 mt-4 flex items-center cursor-pointer">
            <RxDashboard className='mr-2' />
            <span><Link to={"/"}>Log Out</Link></span>
          </button>
        </div>
      </div>

      {/* Right Section (Content) */}
      <div
        className={`w-full md:w-[80%] bg-gray-100 p-6 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* Hamburger Icon (Visible on small screens) */}
        <button
          className="md:hidden mb-4 p-2 bg-gray-800 text-white rounded-full"
          onClick={toggleSidebar}
        >
            <MdLegendToggle />
        </button>

    <div className="mb-6 w-[100%] sm:w-[90%] bg-white p-4 flex flex-col justify-center rounded-lg">
        <h2 className="text-2xl font-bold ">Profile Settings</h2>
        <p>Manage your Personal Information</p>
    </div>
    <div className="w-[100%] sm:w-[90%] bg-white px-4 py-6 space-y-6 text-center flex flex-col items-center justify-center rounded-lg">
          <div className="w-[100%] ">

      {/* Name Section */}
      <div className="border-b border-[#D4D4D4] pb-4 mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('name')}>
          <h3 className="text-lg font-medium">Name</h3>
          {openName ? (
            <FaChevronUp className="text-green-500" />
          ) : (
            <FaChevronDown className="text-green-500" />
          )}
        </div>
        {openName && (
          <div className="mt-3 bg-[#ECECEC] p-3 rounded-md">
            <div className="mb-2">
              <label className="text-sm font-medium flex ">Name <span className='text-red-500'>*</span></label>
              <input type="text" className="w-full p-2 mt-2 border border-[#BFBFBF] rounded-md" placeholder="Enter your name" />
            </div>
            <div>
              <label className="text-sm font-medium flex">Surname<span className='text-red-500'>*</span></label>
              <input type="text" className="w-full p-2 mt-2 border border-[#BFBFBF] rounded-md" placeholder="Enter your surname" />
            </div>
            <button className="mt-3 text-[#0B8D46] cursor-pointer flex items-center">
              <FaRegEdit className="mr-2 " />
              Edit Name
            </button>
          </div>
        )}
      </div>

      {/* Address Section */}
      <div className="border-b border-[#D4D4D4] pb-4 mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('address')}>
          <h3 className="text-lg font-medium">Address</h3>
          {openAddress ? (
            <FaChevronUp className="text-green-500" />
          ) : (
            <FaChevronDown className="text-green-500" />
          )}
        </div>
        {openAddress && (
          <div className="mt-3 bg-[#ECECEC] p-3 rounded-md">
            <div className="mb-2">
              <label className="text-sm font-medium flex">Street Address<span className='text-red-500'>*</span></label>
              <input type="text" className="w-full p-2 mt-1 border border-[#BFBFBF] rounded-md" placeholder="Enter your street address" />
            </div>
            <div className="mb-2">
              <label className="text-sm font-medium flex">City<span className='text-red-500'>*</span></label>
              <input type="text" className="w-full p-2 mt-1 border border-[#BFBFBF] rounded-md" placeholder="Enter your city" />
            </div>
            <div className="mb-2">
              <label className="text-sm font-medium flex">Postal Code<span className='text-red-500'>*</span></label>
              <input type="text" className="w-full p-2 mt-1 border border-[#BFBFBF] rounded-md" placeholder="Enter your postal code" />
            </div>
          </div>
        )}
      </div>

      {/* Email and Password Section */}
      <div className="border-b border-[#D4D4D4] pb-4 mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('email')}>
          <h3 className="text-lg font-medium">Email and password</h3>
          {openEmail ? (
            <FaChevronUp className="text-green-500" />
          ) : (
            <FaChevronDown className="text-green-500" />
          )}
        </div>
        {openEmail && (
          <div className="mt-3 bg-[#ECECEC] p-3 rounded-md">
            <div className="mb-2">
              <label className="text-sm font-medium flex">Email<span className='text-red-500'>*</span></label>
              <input type="email" className="w-full p-2 mt-1 border border-[#BFBFBF] rounded-md" placeholder="Enter your email" />
            </div>
            <div className="mb-2">
              <label className="text-sm font-medium flex">Password<span className='text-red-500'>*</span></label>
              <input type="password" className="w-full p-2 mt-1 border border-[#BFBFBF] rounded-md" placeholder="Enter your password" />
            </div>
          </div>
        )}
      </div>

      {/* Managing Consents Section */}
      <div className="border-b border-[#D4D4D4] pb-4 mb-4">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('consent')}>
          <h3 className="text-lg font-medium">Managing consents</h3>
          {openConsent ? (
            <FaChevronUp className="text-green-500" />
          ) : (
            <FaChevronDown className="text-green-500" />
          )}
        </div>
        {openConsent && (
          <div className="mt-3 bg-[#ECECEC] p-3 rounded-md">
            <p className="text-sm">Manage your consents here. You can update your preferences for data collection and sharing.</p>
          </div>
        )}
      </div>
    </div>
  
                  
    </div>

      </div>
    </div>
  );
};

export default DMyProfile;
