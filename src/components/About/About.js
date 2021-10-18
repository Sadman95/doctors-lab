import { Box } from '@mui/system';
import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const About = () => {
    return (
        <Box id='about' className='mt-16 pt-16'>
            <h1 className='text-gray-600 text-center text-4xl font-semibold'>About Us</h1>
            <div className='flex flex-wrap-reverse justify-evenly items-center mt-10'>
                <div>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We provide emergency services such as free ambulance fecility incase of amergency</p>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We provide blood test fecility also.We have special nursing unit to collect samples of blood</p>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We provode 24/7 pharmacy support to fecilitate you with medicine</p>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We provide outdoor checkup fecility to our patients</p>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We provide fully air conditioned & clean operattion theater service</p>
                    <p className='mb-4 text-gray-800 font-medium'><LocalHospitalIcon className='text-red-700'/>&nbsp;We are giving all day special service in case of any emergency</p>
                </div>
                <div className='md:mb-4 sm:mb-4'>
                    <img width='500px' src="https://i.ibb.co/pdf58ff/about.jpg" alt="about_right" />
                </div>
            </div>
        </Box>
    );
};

export default About;