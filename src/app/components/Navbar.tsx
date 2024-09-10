"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-white shadow-lg fixed w-full z-10 top-0 left-0'>
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <div className='text-2xl font-montserrat font-bold'>
          <Link href='/'>OluVictorMinistry</Link>
        </div>

        {/* Desktop Nav */}
        <div className='hidden lg:flex space-x-8 items-center'>
          <Link
            href='/about-us'
            className='text-lg font-openSans hover:text-gray-700'
          >
            About Us
          </Link>
          <Link href='/' className='text-lg font-openSans hover:text-gray-700'>
            Devotional
          </Link>

          <Link href='/' className='text-lg font-openSans hover:text-gray-700'>
            Programs
          </Link>
          <Link href='/' className='text-lg font-openSans hover:text-gray-700'>
            Sermon
          </Link>
          <Link href='/' className='text-lg font-openSans hover:text-gray-700'>
            Giving
          </Link>

          <Link
            href='/'
            className='bg-primaryColour text-white px-4 py-2 rounded-md font-openSans hover:bg-primaryColour/90'
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className='lg:hidden'>
          <button onClick={toggleMenu} className='text-3xl focus:outline-none'>
            {!isOpen ? <FiMenu /> : ""}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-full bg-powder   z-20 transition-transform transform w-64 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className='flex flex-col items-start justify-start space-y-6 p-6 h-full'>
          <button
            onClick={toggleMenu}
            className='text-black text-3xl self-end focus:outline-none mb-8'
          >
            <FiX />
          </button>
          <Link
            href='/'
            className='text-2xl text-black font-openSans'
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            href='/'
            className='text-2xl text-black font-openSans'
            onClick={toggleMenu}
          >
            Devotional
          </Link>
          <Link
            href='/'
            className='text-2xl text-black font-openSans'
            onClick={toggleMenu}
          >
            Programs
          </Link>
          <Link
            href='/'
            className='text-2xl text-black font-openSans'
            onClick={toggleMenu}
          >
            Sermon
          </Link>
          <Link
            href='/'
            className='text-2xl text-black font-openSans'
            onClick={toggleMenu}
          >
            Giving
          </Link>
          <Link
            href='/'
            className='bg-primaryColour text-white px-6 py-3 rounded-md font-openSans'
            onClick={toggleMenu}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
