import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/celtic-logo.png";
import { MdLegendToggle } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineDashboard, MdPayments } from "react-icons/md";
import { PiNotepad } from "react-icons/pi";
import { TbSettingsDollar } from "react-icons/tb";
import { ImHistory } from "react-icons/im";
import { RxDashboard } from "react-icons/rx";

const DPaymentHistory = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSidebarActiveTab(tabName);
    };
    
    const [sidebarActiveTab, setSidebarActiveTab] = useState("PaymentHistory");


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
            className={`flex items-center space-x-4 cursor-pointer bg-[#0B8D4624] p-2 rounded-md ${
              sidebarActiveTab === "PaymentHistory" ? "text-green-500 font-semibold" : "text-gray-600"
            }`}
            onClick={() => handleTabClick("PaymentHistory")}
          >
            <Link to={"/payment-history"} className='flex items-center space-x-4'>
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
        <div className="flex flex-col justify-between border p-4 rounded-md border-gray-300">
            <h2 className="text-2xl font-bold mb-4">Payment History</h2>
            <div className="bg-[#ECECEC] rounded-lg shadow-sm flex items-center justify-between px-4 py-3 w-full mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-sm sm:text-base ">ALL SIM FILTER</span>
                    </div>
                    <FiChevronDown size={20} className="text-gray-500" />
                    </div>
        </div>
      </div>

      {/* Other Saved Payment Method Section */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Apr 2025</h2>
        <div className="flex flex-col justify-between border p-6 rounded-md border-gray-300">
            <div className='flex justify-between'>
            <div>
                <p className=" text-gray-600 font-semibold">5GB 12-Month Plan</p>
                <p className="text-sm mb-2">08 Apr 2025 07:51am</p>

            </div>
            <div className="flex">
                <p className='text-green-500 mb-2'>$4.50</p>
            </div>
        </div>
                          
            <div className='flex justify-between'>
                <div>
                    <p className="text-sm">Payment Method</p>
                    <p className="text-sm">Order ID</p>
                    <p className="text-sm ">Status</p>
                    <p className="text-sm ">Invoice</p>
                </div>
                <div className='text-end'>
                    <p className='text-sm'>Card</p>
                    <p className='text-sm'>GB_23121953</p>
                    <p className='text-sm'>Successful</p>
                    <p className='underline text-sm'>Download</p>
                </div>
            </div>
        </div>
      </div>

                    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Mar 2025</h2>
        <div className="flex flex-col justify-between border p-6 rounded-md border-gray-300">
            <div className='flex justify-between'>
            <div>
                <p className=" text-gray-600 font-semibold">5GB 12-Month Plan</p>
                <p className="text-sm mb-2">08 Mar 2025 07:51am</p>

            </div>
            <div className="flex">
                <p className='text-green-500 mb-2'>$4.50</p>
            </div>
        </div>
                          
            <div className='flex justify-between'>
                <div>
                    <p className="text-sm">Payment Method</p>
                    <p className="text-sm">Order ID</p>
                    <p className="text-sm ">Status</p>
                    <p className="text-sm ">Invoice</p>
                </div>
                <div className='text-end'>
                    <p className='text-sm'>Card</p>
                    <p className='text-sm'>GB_23121953</p>
                    <p className='text-sm'>Successful</p>
                    <p className='underline text-sm'>Download</p>
                </div>
            </div>
        </div>
      </div>

                    <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Feb 2025</h2>
        <div className="flex flex-col justify-between border p-6 rounded-md border-gray-300">
            <div className='flex justify-between'>
            <div>
                <p className=" text-gray-600 font-semibold">5GB 12-Month Plan</p>
                <p className="text-sm mb-2">08 Feb 2025 07:51am</p>

            </div>
            <div className="flex">
                <p className='text-green-500 mb-2'>$4.50</p>
            </div>
        </div>
                          
            <div className='flex justify-between'>
                <div>
                    <p className="text-sm">Payment Method</p>
                    <p className="text-sm">Order ID</p>
                    <p className="text-sm ">Status</p>
                    <p className="text-sm ">Invoice</p>
                </div>
                <div className='text-end'>
                    <p className='text-sm'>Card</p>
                    <p className='text-sm'>GB_23121953</p>
                    <p className='text-sm'>Successful</p>
                    <p className='underline text-sm'>Download</p>
                </div>
            </div>
        </div>
      </div>

       

    </div>

      </div>
    </div>
  );
};

export default DPaymentHistory;
