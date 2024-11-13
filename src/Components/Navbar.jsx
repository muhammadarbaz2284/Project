import React, { useState } from 'react';
import logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='w-full h-14 bg-white flex justify-between px-4'>
      {/* Logo Section */}
      <div className='md:px-16 px-3 h-12'>
        <img src={logo} alt="Logo" className='h-full' />
      </div>

      {/* Desktop Menu */}
      <ul className='md:flex hidden font-semibold py-5 gap-6'>
        <li className='cursor-pointer mx-[10px]'>Home</li>
        <li className='cursor-pointer mx-[10px]'>How it Works</li>
        <li className='cursor-pointer mx-[10px]'>Our Chefs</li>
        <li className='cursor-pointer mx-[10px]'>Book</li>
      </ul>

      {/* Sign In / Log In */}
      <div className='py-5 md:block hidden font-semibold cursor-pointer'>
        Sign In | Log In
      </div>

      {/* Hamburger Icon */}
      <div className='md:hidden' onClick={toggleMenu}>
        <a className='text-4xl cursor-pointer'>&#8801;</a>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className='md:hidden absolute top-14 left-0 w-full bg-white shadow-md font-semibold flex flex-col items-center gap-4 py-4'>
          <li className='cursor-pointer mx-[10px]'>Home</li>
          <li className='cursor-pointer mx-[10px]'>How it Works</li>
          <li className='cursor-pointer mx-[10px]'>Our Chefs</li>
          <li className='cursor-pointer mx-[10px]'>Book</li>
          <li className='cursor-pointer mx-[10px]'>Sign In | Log In</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

