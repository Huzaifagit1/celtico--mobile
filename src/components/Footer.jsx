import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/celtic-white-logo.png"

export default function Footer() {  
    return (
      <footer className="bg-[#0B8D46] text-white py-8 mb-0 border-b-0" style={{backgroundColor:"#0B8D46"}}>
        <div className="w-11/12 sm:w-full md:w-4/5 mx-auto px-4">
          {/* Top section with logo and navigation */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <Link to={"/"}>
                <img src={logo} alt="logo" />
              </Link>
            </div>  
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <p className="hover:underline cursor-pointer">Home</p>
              <p className="hover:underline cursor-pointer">Plans</p>
              <p className="hover:underline cursor-pointer">How It Works</p>
              <p className="hover:underline cursor-pointer">Why Choose Us?</p>
              <p className="hover:underline cursor-pointer">
                <Link to={"/"}>
                  Purchase Now
                </Link>
              </p>
            </nav>
          </div>
          
          {/* Middle section with legal text */}
          <div className="text-xs mb-6 flex flex-col md:flex-row justify-between gap-4">
  <p className="max-w-3xl text-justify">
    This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply.
    You must not use this website if you disagree with any of these website standard terms and conditions.
  </p>

  <div className="flex gap-3 justify-center md:justify-end">
    <a href="#" aria-label="Instagram" className="rounded-full">
      <img src="instagram.svg" alt="Instagram icon" width="24" height="24" />
    </a>
    <a href="#" aria-label="Facebook" className="rounded-full">
      <img src="facebook.svg" alt="Facebook icon" width="24" height="24" />
    </a>
    <a href="#" aria-label="LinkedIn" className="rounded-full">
      <img src="linkedin.svg" alt="LinkedIn icon" width="24" height="24" />
    </a>
    <a href="#" aria-label="Pinterest" className="rounded-full">
      <img src="pinterest.svg" alt="Pinterest icon" width="24" height="24" />
    </a>
  </div>
</div>

                  
          {/* Bottom section with copyright and social media */}
          <div className="flex flex-col items-center justify-center">
  {/* Copyright */}
  <div className="text-sm mb-4 md:mb-0 text-center">
    <p>© 2025 All rights reserved | KodeKrunch</p>
  </div>

  {/* Social Media Icons */}
</div>

        </div>
      </footer>  
    );
  }