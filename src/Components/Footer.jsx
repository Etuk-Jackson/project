import React from 'react';
import { footer } from '../Constants/Index';
import { MdOutlineLocationOn, MdPhoneAndroid } from 'react-icons/md';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { ImFacebook2 } from 'react-icons/im';

function Footer() {
  return (
    <div className="footer font-sans bg-black text-white pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Row - Footer Links & Contact Info */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-8 lg:mb-12">
          {/* Footer Links - Zig-zag pattern */}
          <div className="foot-links w-full">
            <div className="flex flex-wrap justify-between gap-6 lg:gap-8">
              {footer.map((foot, index) => (
                <div 
                  className={`min-w-[150px] ${index % 2 === 0 ? 'text-left' : 'text-right lg:text-left'}`} 
                  key={foot.name}
                >
                  <p className="font-bold text-lg sm:text-xl mb-3 md:mb-4 text-white">
                    {foot.name}
                  </p>
                  <ul className={`flex flex-col gap-2 sm:gap-3 ${index % 2 === 0 ? 'items-start' : 'items-end lg:items-start'}`}>
                    {foot.links.map((link) => (
                      <li 
                        key={link} 
                        className="text-sm sm:text-base text-gray-300 hover:text-white cursor-pointer transition-colors duration-200"
                      >
                        {link}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info - Right aligned on larger screens */}
          <div className="hidden lg:flex flex-col items-start gap-4 min-w-[250px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <MdOutlineLocationOn className="text-gray-300 shrink-0" size='24px' />
                <p className="text-base text-gray-300 mt-0.5">
                  7480 Mockingbird Hill undefined
                </p>
              </div>
              <div className="flex items-center gap-3">
                <MdPhoneAndroid className="text-gray-300 shrink-0" size='24px' />
                <p className="text-base text-gray-300 mt-0.5">
                  (239) 555-0108
                </p>
              </div>
            </div>
            
            {/* Social Media Icons - For larger screens in top row */}
            <div className="flex items-center gap-5 mt-2">
              <BsTwitter 
                size='22px' 
                className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" 
              />
              <ImFacebook2 
                size='22px' 
                className="text-gray-300 hover:text-blue-600 cursor-pointer transition-colors duration-200" 
              />
              <BsLinkedin 
                size='22px' 
                className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" 
              />
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright & Mobile Contact Info */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-700">
          {/* Copyright */}
          <div className="text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-400">
              © {new Date().getFullYear()} Your Company Name. All rights reserved.
            </p>
          </div>

          {/* Contact Info & Social Media - Only visible on mobile/tablet */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:hidden w-full sm:w-auto">
            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto justify-center sm:justify-start">
              <div className="flex items-center gap-2">
                <MdOutlineLocationOn className="text-gray-300" size='18px' />
                <p className="text-sm text-gray-300">7480 Mockingbird Hill</p>
              </div>
              <div className="flex items-center gap-2">
                <MdPhoneAndroid className="text-gray-300" size='18px' />
                <p className="text-sm text-gray-300">(239) 555-0108</p>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <BsTwitter 
                size='20px' 
                className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" 
              />
              <ImFacebook2 
                size='20px' 
                className="text-gray-300 hover:text-blue-600 cursor-pointer transition-colors duration-200" 
              />
              <BsLinkedin 
                size='20px' 
                className="text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-200" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;