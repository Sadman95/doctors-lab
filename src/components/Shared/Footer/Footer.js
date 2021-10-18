import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <div className='bg-indigo-300 px-4 py-8 flex flex-wrap justify-between items-center'>
            <div>
                <h6 className='text-gray-700'>&copy;&nbsp;All copyrights reserved || 2021</h6>
            </div>
            <div className='text-gray-700 flex gap-2'>
                <span className='font-medium'>Follow us on: </span>
                <FacebookIcon></FacebookIcon>
                <TwitterIcon></TwitterIcon>
                <InstagramIcon></InstagramIcon>
                <LinkedInIcon></LinkedInIcon>
            </div>
        </div>
    );
};

export default Footer;