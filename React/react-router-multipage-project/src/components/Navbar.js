import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-items bg-[#333]">
      <ul className="flex p-4 justify-around items-center ">
        <Link
          to="/Home"
          className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff] focus:text-[#fff] focus:border-[2px] focus:border-[#fff]"
        >
          <li>Home</li>
        </Link>
        <Link
          to="/About"
          className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff] focus:text-[#fff] focus:border-[2px] focus:border-[#fff]"
        >
          <li>About</li>
        </Link>
        <Link
          to="/Contact"
          className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff] focus:text-[#fff] focus:border-[2px] focus:border-[#fff]"
        >
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
