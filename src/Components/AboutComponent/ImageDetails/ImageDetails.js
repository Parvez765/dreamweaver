import React from 'react';
import imageOne from "../../../assets/AboutImage/Orange.jpg"
import "./ImageDetails.css"

const ImageDetails = () => {
    return (
        <div className='container mx-auto text-white mt-[50px] bgContainer p-10'>
                   <div className='lg:w-[1300px] block mx-auto mb-[30px]'>
                        <hr className='ruler'/>
                   </div>
            <div className='grid lg:grid-cols-3 justify-center items-center'>
                <div>
                   <p className='text-[30px]'>Work With Me</p>
                </div>
                <div>
                    <p>If you are interested in having Cassandra document your wedding day, please fill out the contact form and she will respond as soon as possible.</p>
                </div>
                <div className=''>
                    <button className='connectBtn'>Connect With Me</button>
                </div>
            </div>
        </div>
    );
};

export default ImageDetails;