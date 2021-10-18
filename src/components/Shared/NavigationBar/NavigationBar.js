import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../../src/logo.png";

const NavigationBar = () => {
  return (
    <Box className="bg-blue-50 p-4 flex items-center">
      <Box className="flex items-center">
        <img className="w-10" src={logo} alt="" />
        <h2 className="text-3xl font-medium">
          <span className="text-purple-800 font-bold">Doctor's</span> Lab
        </h2>
      </Box>
      <Box className="ml-auto flex gap-5 items-center">
        <Link className='font-bold hover:text-purple-900' to='/'>Home</Link>
        <HashLink className='font-bold hover:text-purple-900' to='/home#about'>About Us</HashLink>
        <HashLink className='font-bold hover:text-purple-900' to='/home#services'>Services</HashLink>
        <Link className='font-bold hover:text-purple-900'>Our Specialists</Link>
        <Link className='font-bold hover:text-purple-900'>Contact Us</Link>
        <Link to='/appointment'>
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700">Your Appointment</button>
        </Link>
        <Link to='/login'>
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">Log In</button>
        </Link>
        <Link to='/signup'>
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-yellow-500 hover:bg-yellow-700">Sign Up</button>
        </Link>
      </Box>
    </Box>
  );
};

export default NavigationBar;
