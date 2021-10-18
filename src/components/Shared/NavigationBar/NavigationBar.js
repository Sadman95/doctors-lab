import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
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
        <Link>Home</Link>
        <Link>About Us</Link>
        <Link>Services</Link>
        <Link>Our Specialists</Link>
        <Link>Contact Us</Link>
        <Link>
          <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700">Your Appointment</button>
        </Link>
      </Box>
    </Box>
  );
};

export default NavigationBar;
