// components/Navbar.js
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { LoginLink, LogoutLink, useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';

const Navbar = () => {

  const {getUser} = useKindeBrowserClient();
   const user =  getUser();



  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

   const closeMenu = () => {
       setIsOpen(false);
   };

  return (
    // --- Theme Adjustments Start Here ---
    <nav className="bg-gradient-to-r from-cyan-700 to-teal-600 h-20 flex justify-center items-center text-white sticky top-0 z-50 shadow-md text-base md:text-lg"> {/* Changed gradient, adjusted text size slightly */}
      <div className="flex justify-between items-center h-20 max-w-screen-xl mx-auto px-4 w-full">

        {/* Logo - Keeping text white for now */}
        <Link href="/" className="text-xl md:text-2xl font-bold cursor-pointer flex items-center" onClick={closeMenu}>
          Lavish Med Spa {/* Consider replacing with an actual SVG/Image logo later */}
        </Link>

        

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 list-none">
          {/* Adjusted hover effect slightly */}
          <li><Link href="#services" className="hover:text-cyan-100 pb-1 transition duration-200 ease-in-out">Services</Link></li>
          <li><Link href="#about" className="hover:text-cyan-100 pb-1 transition duration-200 ease-in-out">About Us</Link></li>
          <li><Link href="#testimonials" className="hover:text-cyan-100 pb-1 transition duration-200 ease-in-out">Testimonials</Link></li>
          <li><Link href="#contact" className="hover:text-cyan-100 pb-1 transition duration-200 ease-in-out">Contact</Link></li>
          {/* Book Now Button - Styled to match theme */}


          {
            user ? 




            (            <div className="flex items-center gap-4">
              <p>{user.given_name}</p>
              <LogoutLink >Logout</LogoutLink>
          </div>):
            (<li>
            {/* <Link
              href="/book-now"
              className="bg-white text-teal-700 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 hover:text-teal-800 transition duration-200 ease-in-out ml-4" // Adjusted colors and padding/rounding
            >
              Book Now
            </Link> */}


            <LoginLink               className="bg-white text-teal-700 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 hover:text-teal-800 transition duration-200 ease-in-out ml-4" >Book now</LoginLink>
          </li>)
          
          }
          
        </ul>

        {/* Mobile Menu Icon - Stays white */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Adjusted background and button style */}
       <ul
        className={`
          md:hidden ${isOpen ? 'block' : 'hidden'}
          absolute top-20 left-0 w-full h-[calc(100vh-80px)]
          bg-gradient-to-b from-teal-600 to-cyan-700  
          flex flex-col items-center justify-center space-y-6 text-xl ${/* Adjusted spacing */''}
          transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `} >
         {/* Mobile Links - Adjusted hover */}
        <li className="w-full text-center"><Link href="#services" className="block py-3 hover:bg-white/10 w-full" onClick={closeMenu}>Services</Link></li>
        <li className="w-full text-center"><Link href="#about" className="block py-3 hover:bg-white/10 w-full" onClick={closeMenu}>About Us</Link></li>
        <li className="w-full text-center"><Link href="#testimonials" className="block py-3 hover:bg-white/10 w-full" onClick={closeMenu}>Testimonials</Link></li>
        <li className="w-full text-center"><Link href="#contact" className="block py-3 hover:bg-white/10 w-full" onClick={closeMenu}>Contact</Link></li>
        {/* Mobile Book Now Button */}
        <li className="mt-6 w-full px-8">
          <Link
            href="#"
            className="bg-white text-teal-700 font-semibold py-3 px-6 rounded-md block text-center hover:bg-gray-100 hover:text-teal-800 transition duration-200 ease-in-out w-full" // Matched desktop button style
            onClick={closeMenu}
          >
            Book Now
          </Link>
        </li>
      </ul>
      {/* Overlay - No change needed */}
      {isOpen && <div className="md:hidden fixed inset-0 bg-black/30 z-40 top-20" onClick={closeMenu}></div>}
      {/* --- Theme Adjustments End Here --- */}
    </nav>
  );
};

export default Navbar;