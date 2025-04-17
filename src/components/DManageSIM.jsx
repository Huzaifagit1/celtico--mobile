import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/celtic-logo.png";
import { MdLegendToggle } from "react-icons/md";
import { FiPhone, FiMessageSquare, FiBarChart2, FiChevronDown, FiFileText } from "react-icons/fi";
import { MdOutlineDashboard, MdPayments } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbSettingsDollar } from "react-icons/tb";
import { ImHistory } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";

const DManageSIM = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSidebarActiveTab(tabName);
    };
    
    const [sidebarActiveTab, setSidebarActiveTab] = useState("ManageYourSIM");


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
              sidebarActiveTab === "Dashboard" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("Dashboard")}
          >
            <Link to={"/dashboard"} className='flex items-center space-x-4 p-2 rounded-md'>
              <MdOutlineDashboard className='text-green-500 ' />
              <span>Dashboard</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer ${
              sidebarActiveTab === "MyProfile" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("MyProfile")}
          >
            <Link to={"/my-profile"} className='flex items-center space-x-4 p-2 rounded-md'>
              <PiNotepad className='text-green-500 ' />
              <span>My Profile</span>
            </Link>
          </li>
          <li
            className={`flex items-center space-x-4 cursor-pointer bg-[#0B8D4624] p-2 rounded-md ${
              sidebarActiveTab === "ManageYourSIM" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("ManageYourSIM")}
          >
            <Link to={"/manage-sim"} className='flex items-center space-x-4'>
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
          className="md:hidden p-2 bg-gray-800 text-white rounded-full"
          onClick={toggleSidebar}
        >
            <MdLegendToggle />
        </button>

    <div className="w-[100%] sm:w-[80%] mx-auto px-4 py-6 space-y-6 text-center h-[60vh] flex flex-col items-center justify-center">
      <div>
        <h2 className="text-lg font-bold sm:text-xl">SIM(s) linked to your online account</h2>
        <p className="text-sm text-gray-600 mt-1">
          There is 1 phone number associated with your MyLebara account
        </p>
      </div>

      <div>
        <button className="bg-green-600 text-white font-medium px-6 py-2 rounded-md hover:bg-green-700 transition">
          Link Another SIM
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border flex items-center justify-between px-4 py-3 w-full">
        <div className="flex items-center gap-3">
          <FiFileText size={20} className="text-gray-500" />
          <span className="text-sm sm:text-base font-medium">07868866392</span>
        </div>
        <FiChevronDown size={20} className="text-gray-500" />
      </div>
    </div>

      </div>
    </div>
  );
};

export default DManageSIM;
