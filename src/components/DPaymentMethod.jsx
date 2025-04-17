import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mastercard from "../assets/images/mastercard.png"
import visa from "../assets/images/visa.png"
import { IoMdCard } from "react-icons/io";
import logo from "../assets/images/celtic-logo.png";
import { MdLegendToggle } from "react-icons/md";
import { FiPhone, FiMessageSquare, FiBarChart2, FiChevronDown, FiFileText } from "react-icons/fi";
import { MdOutlineDashboard, MdPayments, MdMoreHoriz } from "react-icons/md";
import { FaCcMastercard, FaCcVisa } from 'react-icons/fa';
import { PiNotepad, PiDotsThreeOutlineVertical } from "react-icons/pi";
import { TbSettingsDollar } from "react-icons/tb";
import { ImHistory } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";

const DPaymentMethod = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSidebarActiveTab(tabName);
    };
    
    const [sidebarActiveTab, setSidebarActiveTab] = useState("PaymentMethod");


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
            &times;
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
            className={`flex items-center space-x-4 cursor-pointer bg-[#0B8D4624] p-2 rounded-md ${
              sidebarActiveTab === "PaymentMethod" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("PaymentMethod")}
          >
            <Link to={"/payment-method"} className='flex items-center space-x-4'>
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
          className="md:hidden p-2 bg-gray-800 text-white rounded-full mb-4"
          onClick={toggleSidebar}
        >
            <MdLegendToggle />
        </button>

    <div className="md:w-[95%] px-4 py-6 space-y-6 flex flex-col justify-center bg-white rounded-lg shadow-md">

    <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Default Payment Method</h2>
        <div className="flex justify-between items-center border p-6 rounded-md border-gray-300">
          <div>
            <p className="text-sm text-gray-600">Credit / Debit Card</p>
            <p className="text-xl">**** **** **** 1234</p>
            <img className='py-2' src={mastercard} alt="mastercard" />
            <p className="text-sm text-gray-600">Expires 1/2028</p>
          </div>
          <div className="h-[100px] flex flex-col items-end justify-between">
            <PiDotsThreeOutlineVertical className="text-gray-600 text-xl ml-4 cursor-pointer" />
            <button className="bg-[#0B8D466B] text-[#0B8D46] px-4 py-2 rounded-full text-sm">Default</button>
          </div>
        </div>
      </div>

      {/* Other Saved Payment Method Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Other saved payment method</h2>
        <div className="flex justify-between border p-6 rounded-md border-gray-300">
          <div>
            <p className="text-sm text-gray-600">Credit / Debit Card</p>
            <p className="text-xl">**** **** **** 1234</p>
            <p className="text-sm text-gray-600">Amitabh Sharma</p>
            <p className="text-sm text-gray-600">Expires 1/2028</p>
          </div>
          <div className="flex flex-col">
            <PiDotsThreeOutlineVertical className="text-gray-600 text-xl ml-4 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="">
        <h2 className="text-2xl font-bold mb-2">Payment methods</h2>
        <div className="flex justify-between items-center  border p-4 rounded-md border-gray-300">
        <div className='flex items-center'>
            <IoMdCard className='text-xl' />
            <p className="text-sm text-gray-600 ml-2">Credit Or Debit Card</p>
          </div>
        <div className="flex items-center">
            <img className='mr-4 w-10' src={mastercard} alt="mastercard" />
            <img className='mr-4 w-10' src={visa} alt="visa" />
            {/* <FaCcVisa className="text-blue-600 text-xl mr-2" />
            <FaCcMastercard className="text-[#f9a825] text-xl" /> */}
          </div>
        </div>
        <div className='mt-4 border p-4 rounded-md border-gray-300'>
        <p className="text-sm text-gray-600 mt-2">
          You can now set up a preferred payment method and activate a continuous payment authority for Lebara. This is an extremely convenient payment setting that means you no longer have to enter payment method information for each individual Lebara purchase or payment.
        </p>
        <p className="text-sm text-gray-600 mt-2">
          By selecting this default payment method, you have authorized recurring payments for this recurring product. Your payment details will be saved securely.
                          </p>
                          </div>
      </div>

                  

    </div>

      </div>
    </div>
  );
};

export default DPaymentMethod;
