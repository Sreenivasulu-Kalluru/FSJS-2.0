import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav-items bg-[#333]">
      <ul className="flex p-4 justify-around items-center ">
        <Link to="/Home">
          <li className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff]">
            Home
          </li>
        </Link>
        <Link to="/About">
          <li className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff]">
            About
          </li>
        </Link>
        <Link to="/Contact">
          <li className="btn hover:text-[#000] hover:bg-transparent hover:text-[#fff] hover:border-[2px] hover:border-[#fff]">
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
