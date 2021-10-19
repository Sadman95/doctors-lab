import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../../../src/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Box className="bg-blue-50 p-4 flex items-center">
      <Box className="flex items-center">
        <img className="w-10" src={logo} alt="" />
        <h2 className="text-3xl font-medium">
          <span className="text-purple-800 font-bold">Doctor's</span> Lab
        </h2>
      </Box>
      <Box className="ml-auto">
        <ul className="sm: hidden md:hidden lg:flex flex-wrap gap-3 items-center">
          <Link className="font-semibold hover:text-purple-900" to="/">
            Home
          </Link>
          <HashLink
            smooth
            className="font-semibold hover:text-purple-900"
            to="/#about"
          >
            About Us
          </HashLink>
          <HashLink
            smooth
            className="font-semibold hover:text-purple-900"
            to="/#services"
          >
            Services
          </HashLink>
          <HashLink
            smooth
            to="/#doctors"
            className="font-semibold hover:text-purple-900"
          >
            Our Specialists
          </HashLink>
          <HashLink
            smooth
            to="/#subscribe"
            className="font-semibold hover:text-purple-900"
          >
            Subscribe
          </HashLink>
          <Link to="/appointment">
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700">
              user
            </button>
          </Link>
          <Link to="/login">
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-yellow-500 hover:bg-yellow-700">
              Sign Up
            </button>
          </Link>
        </ul>
        <div className="md: block lg:hidden">
          <label htmlFor="check">
            <MenuIcon></MenuIcon>
          </label>
          <input className='hidden' type="checkbox" name="" id="check" />
            <div className="toggle-menu absolute">
            <ul className='flex flex-col items-center gap-2'>
              <Link className="font-semibold hover:text-purple-900" to="/">
                Home
              </Link>
              <HashLink
                smooth
                className="font-semibold hover:text-purple-900"
                to="/#about"
              >
                About Us
              </HashLink>
              <HashLink
                smooth
                className="font-semibold hover:text-purple-900"
                to="/#services"
              >
                Services
              </HashLink>
              <HashLink
                smooth
                to="/#doctors"
                className="font-semibold hover:text-purple-900"
              >
                Our Specialists
              </HashLink>
              <HashLink
                smooth
                to="/#subscribe"
                className="font-semibold hover:text-purple-900"
              >
                Subscribe
              </HashLink>
              <Link to="/appointment">
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-purple-500 hover:bg-purple-700">
                  user
                </button>
              </Link>
              <Link to="/login">
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                  Log In
                </button>
              </Link>
              <Link to="/signup">
                <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-yellow-500 hover:bg-yellow-700">
                  Sign Up
                </button>
              </Link>
            </ul>
            </div>
        </div>
      </Box>
    </Box>
  );
};

export default NavigationBar;
