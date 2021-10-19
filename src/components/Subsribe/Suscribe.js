import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './Subscribe.css'

const Subscribe = () => {
  return (
    <div id="subscribe" className="bg-gray-100 py-6 flex flex-wrap justify-evenly items-center my-24">
      <div>
        <h1 className='text-gray-800 text-2xl font-medium sm: mb-2'><span className='text-5xl text-yellow-500 font-semibold'>Subscribe</span> for Newsletter!!!</h1>
      </div>
      <div  className='field-btn'>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <TextField fullWidth label="Your Email" id="fullWidth" />
        </Box>
        <button className="mt-4 py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-gray-500 hover:bg-gray-700">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
