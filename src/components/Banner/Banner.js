import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <Box className='banner mt-4 relative'>
            <div className='mix-blend-multiply bg-gray-300 absolute left-0 top-0 right-0 bottom-0'></div>
            <div className='absolute left-4 top-1/2 translate-y-1/2'>
            <h1 className='text-4xl mb-4 font-bold'>Need to Appoint A <br /><span className='text-red-500 text-5xl'>Doctor ?</span></h1>
            <h4 className='text-2xl mb-2 text-gray-700'>We are here to check up.</h4>
            <p className='text-1xl mb-8 text-gray-700 font-bold'>Please Log In or Go to Appointment for any health issues...</p>
            <Link to='/login'>
                <button className='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700 mr-2'>Log In</button>
            </Link>
            <Link to='/appointment'>
                <button className='py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700'>Appoint a doctor</button>
            </Link>     
            </div>         
        </Box>
    );
};

export default Banner;