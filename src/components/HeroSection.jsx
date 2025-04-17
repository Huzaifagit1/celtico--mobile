import React from 'react';
import '../styles/HeroSection.css';
const HeroSection = () => {
  return (
    <section className="relative text-white pt-32 pb-24 w-[100%]">
      {/* Background image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center custom-bg-image"></div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0 w-[80%]">
        {/* Left div: Text content */}
        <div className="w-[85%] md:w-[70%] lg:w-[50%] flex flex-col items-center md:items-start">
          <h1 className="custom-heading mb-6 text-lg sm:text-xl md:text-3xl">
            Official Mobile Network of Celtic Mobile
          </h1>
          <p className="custom-text mb-6 text-base md:text-lg lg:text-xl">
            Take the passion everywhere you go
          </p>
          <div className="flex flex-row space-y-0 space-x-4">
            {/* Get Your E-SIM Button */}
            <button className="bg-white text-black custom-button py-2 px-2 sm:px-6 rounded-lg text-lg font-bold">
              Get Your E-sim
            </button>
            {/* View Plans Button */}
            <button className="border bg-black text-white custom-button py-2 px-2 sm:px-6 rounded-lg text-lg  font-bold">
              View Plans
            </button>
          </div>
        </div>

        {/* Right div: Empty for desktop, responsive for mobile */}
        <div className="hidden md:block w-[50%]"></div>
      </div>
    </section>
  );
};
export default HeroSection;
