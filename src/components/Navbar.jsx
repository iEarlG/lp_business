import React, { useState } from 'react';

import { logo, menu, close } from '../assets';
import { navLinks } from '../constants';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="list-one sm:flex hidden justify-end items-center
       flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} 
            text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}
       </ul>
       <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-h-[140px] rounded-xl sidebar`}>
          <ul className="list-one flex flex-col justify-end items-center flex-1">
          {navLinks.map((nav, index) => (
            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} 
              text-white`}
            >
              <a href={`${nav.id}`}>
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
        </div>
       </div>
    </nav>
  );
}

export default Navbar;