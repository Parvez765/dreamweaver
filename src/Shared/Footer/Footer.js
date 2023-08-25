import React from 'react';
import SubFooter from '../SubFooter/SubFooter';

const Footer = () => {
    return (
        <div className='bg-black p-10'>
           <div className='container mx-auto'>
                <div>
                    <p className='text-white'>COPYRIGHTS © 2023 | Sayeed Ishtiaque </p>
                </div>
                <SubFooter/>
           </div>
        </div>
    );
};

export default Footer;