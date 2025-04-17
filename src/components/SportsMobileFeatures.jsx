// src/components/InfoSection.jsx
import React from 'react';

const InfoSection = () => {
  return (
    <div id='why-choose-us' className="w-[90%] sm:w-[100%] md:w-[80%] lg:w-[80%] mx-auto space-y-10 mb-8">
      {/* First Section with Image and Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full space-y-5 lg:space-y-0">
        <img 
          src="/whychooseus.svg" 
          alt="Football" 
          className="w-[90%] sm:w-[100%] md:w-[90%] lg:w-[47%] lg:h-[50%] mx-auto lg:mx-0"  // Ensuring the image is centered
        />
        <div className="flex flex-col items-center sm:text-center lg:items-start lg:text-left space-y-5 lg:ml-10 w-full lg:p-10">
          <h2 className="text-[20px] text-custom-green font-hvdtrial font-semibold text-[#0B8D46]">
            Why Choose Us?
          </h2>

          <ul className="text-[13px] space-y-2 text-lg">
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              Official Celtic FC Mobile Service
            </li>
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              Fast & Reliable UK Coverage
            </li>
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              Exclusive Fan Perks & Discounts
            </li>
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              No Contracts, No Hidden Fees
            </li>
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              Easy Online Management
            </li>  
          </ul>
          <button className="text-white px-5 py-2 rounded-lg hover:bg-green-600" style={{backgroundColor:"#0B8D46"}}>
            Join now
          </button>
        </div>
      </div>

      {/* Second Section with Image and Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full space-y-5 lg:space-y-0">
        <div className="flex flex-col items-center sm:text-center lg:items-start lg:text-left space-y-5 lg:mr-10 w-full">
          <h2 className="text-[20px] text-custom-green font-hvdtrial font-semibold lg:mt-12" style={{color:"#0B8D46"}}>
            Secure Checkout
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-normal max-w-[220px] sm:max-w-[300px] md:max-w-[380px] px-4 sm:px-0 text-center sm:text-left mx-auto sm:mx-0">
  Pay online with Stripe and use your new mobile service.
</p>       

          <ul className="space-y-2 text-lg text-[13px]">
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              One-time setup
            </li>
            <li className='flex'>
              <img src="checkbox.svg" className='w-[12px] mr-1' alt="" />
              Auto-renewal option is available
            </li>
          </ul>
          <button className="text-white px-5 py-2 rounded-lg hover:bg-green-600" style={{backgroundColor:"#0B8D46"}}>
            Join now
          </button>
        </div>
        <img 
          src="/football.svg" 
          alt="Why Choose Us" 
          className="w-[90%] sm:w-[100%] md:w-[90%] lg:w-[47%] h-auto mx-auto lg:mx-0" // Ensuring the image is centered
        />
      </div>
    </div>
  );
};

export default InfoSection;
