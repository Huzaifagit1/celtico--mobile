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


const tabs = [
  { name: "Calls", icon: FiPhone },
  { name: "SMS", icon: FiMessageSquare },
  { name: "Data", icon: FiBarChart2 },
];

const callLogs = [
  {
    number: "+443456002290",
    duration: "11:49",
    cost: "£0",
    date: "05/04/2025 at 15:40",
  },
  {
    number: "+443456002290",
    duration: "11:49",
    cost: "£0",
    date: "05/04/2025 at 15:40",
  },
  {
    number: "+443456002290",
    duration: "11:49",
    cost: "£0",
    date: "05/04/2025 at 15:40",
  },
];

const smsLogs = [
  { number: "+443456002291", message: "Hi there!", date: "05/04/2025 at 14:00" },
  { number: "+443456002292", message: "Reminder: Meeting at 3 PM", date: "05/04/2025 at 13:30" },
  { number: "+443456002292", message: "Reminder: Meeting at 3 PM", date: "05/04/2025 at 13:30" },
];

const dataLogs = [
  { type: "4G", usage: "250MB", date: "05/04/2025 at 12:00" },
  { type: "5G", usage: "1.2GB", date: "05/04/2025 at 10:00" },
  { type: "5G", usage: "1.2GB", date: "05/04/2025 at 10:00" },
];
const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [sidebarActiveTab, setSidebarActiveTab] = useState("Dashboard");

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Function to handle tab selection
  const handleTabClick = (tabName) => {
    setSidebarActiveTab(tabName);
    };
    
    const [activeTab, setActiveTab] = useState("Calls");

  const renderContent = () => {
    if (activeTab === "Calls") {
      return callLogs.map((log, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="bg-green-100 text-green-600 p-2 rounded-full">
              <FiPhone size={20} />
            </div>
            <div>
              <div className="font-semibold">{log.number}</div>
              <div className="text-sm text-gray-500">Duration: {log.duration}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="font-medium">{log.cost}</div>
            <div className="text-sm text-gray-500">{log.date}</div>
          </div>
        </div>
      ));
    } else if (activeTab === "SMS") {
      return smsLogs.map((log, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
              <FiMessageSquare size={20} />
            </div>
            <div>
              <div className="font-semibold">{log.number}</div>
              <div className="text-sm text-gray-500">{log.message}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">{log.date}</div>
        </div>
      ));
    } else {
      return dataLogs.map((log, idx) => (
        <div
          key={idx}
          className="flex justify-between items-center bg-white p-4 rounded-lg shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 text-purple-600 p-2 rounded-full">
              <FiBarChart2 size={20} />
            </div>
            <div>
              <div className="font-semibold">{log.type}</div>
              <div className="text-sm text-gray-500">Used: {log.usage}</div>
            </div>
          </div>
          <div className="text-sm text-gray-500">{log.date}</div>
        </div>
      ));
    }
  };


  return (
    <div className="flex w-full h-[87vh]">
      {/* Left Sidebar */}
      <div
        className={`fixed md:relative inset-0 bg-white text-gray-800 p-4 transition-all ease-in-out duration-300 
        ${isSidebarOpen ? 'w-full z-10' : 'hidden md:block'} md:w-[25%] lg:md:w-[20%] border-r border-gray-300`}
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
            <Link to={"/dashboard"} className='flex items-center space-x-4 bg-[#0B8D4624] p-2 rounded-md'>
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

        <div className="absolute bottom-8 left-4 text-gray-600  p-2 rounded-md">
          <p className=' cursor-pointer'>Need help?</p>
          <button className="text-red-600 mt-4 flex items-center cursor-pointer">
            <RxDashboard className='mr-2' />
            <span><Link to={"/"}>Log Out</Link></span>
          </button>
        </div>
      </div>

      {/* Right Section (Content) */}
      <div
        className={`w-full md:w-[75%] lg:w-[80%] bg-gray-100 p-6 overflow-auto transition-all duration-300 ${
          isSidebarOpen ? 'opacity-50 pointer-events-none' : 'opacity-100 pointer-events-auto'
        }`}
      >
        {/* Hamburger Icon (Visible on small screens) */}
        <button
          className="md:hidden max-md:mb-4 p-2 bg-gray-800 text-white rounded-full"
          onClick={toggleSidebar}
        >
            <MdLegendToggle />
        </button>

        
        <div className="bg-white rounded-lg shadow-sm border flex items-center justify-between px-4 py-3 w-full mb-4">
          <div className="flex items-center gap-3">
            <FiFileText size={20} className="text-gray-500" />
            <span className="text-sm sm:text-base font-medium">07868866392</span>
          </div>
          <FiChevronDown size={20} className="text-gray-500" />
        </div>
        <div className='flex justify-between max-md:mt-4'>
            <h1 className="text-2xl font-bold">Your Plans</h1>
            <div className='text-[#0B8D46]'>{"Manage >"}</div>
        </div>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-4">5GB 12-Month Plan</h2>
            <hr className='text-gray-300' />      
          <div className="mt-4 space-y-2">
            <div className='flex flex-wrap justify-between'>
                <div className="flex justify-between w-[100%] md:w-[47%]">
                <p className="text-gray-600">Data</p>
                <p className="text-green-600">4.55 GB of 5 GB</p>
                </div>
                <div className="flex justify-between w-[100%] md:w-[47%]">
                <p className="text-gray-600">UK Minutes</p>
                <p className="text-green-600">1000 of 1000</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-between'>
                <div className="flex justify-between w-[100%] md:w-[47%]">
                <p className="text-gray-600">UK Texts</p>
                <p className="text-green-600">1000 of 1000</p>
                </div>
                <div className="flex justify-between w-[100%] md:w-[47%]">
                <p className="text-gray-600">International Minutes</p>
                <p className="text-green-600">100 of 100</p>
                </div>
            </div>
          </div>
        </div>

        {/* Usage Details Section */}
        <div className="mt-8">
          <h2 className="text-lg font-bold">Usage details</h2>
          <p className="text-gray-500 mt-2 mb-4">Can take up to 3 hours to show here</p>
    <div className="mx-auto sm:p-4 space-y-4 flex">
      <div className="flex flex-col bg-gray-100 rounded-lg overflow-hidden ">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.name;
          return (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`flex items-center justify-center gap-2 px-4 sm:px-12 py-4 flex-1 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                isActive ? "bg-green-600 text-white" : "text-black hover:bg-gray-200"
              }`}
            >
              <Icon size={50} />
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className="space-y-2 w-[100%]">{renderContent()}</div>
    </div>


        </div>

      </div>
    </div>
  );
};

export default Dashboard;
