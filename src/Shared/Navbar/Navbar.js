import React, { useState } from 'react';
import "./Navbar.css"
import { FaBars, FaRegWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {

    //   Changing NavBar Toggle
    const [show, setShow] = useState(false)

    const handleShowNav = () => {
        setShow(!show)
    }
    // console.log(show);

    return (
        <div className='container mx-auto navContainer'>
            {/* Large Device */}
            <div className='flex gap-[70px] justify-center items-center'>
                <div className='hidden lg:block'>
                    <div className='flex gap-[70px] text-[20px] mt-[60px]'>
                       <Link to ="/"><p>HOME</p></Link>
                       <Link to="/about"><p>About</p></Link>
                        <p>PORTFOLIO</p>
                    </div>
                </div>
                {
                    show ?
                        <div className='bg-slate-900 w-full'>
                            <div className='flex items-center gap-[100px]'>
                                <div>
                                    <h1 className='text-[20px] lg:text-[40px] 2xl:text-[50px] font-semibold mt-[30px] lg:mt-[0px] ml-[30px] lg:ml-[0px]'>SAYEED ISHTIAQUE</h1>
                                </div>
                                {/* Small Device */}
                                <div className='block lg:hidden'>
                                    {
                                        show ?
                                            <div className='mt-[30px] lg:mt-[60px]'>
                                                {
                                                    show && <div className='-ml-[50px]'><FaRegWindowClose className='text-[20px]' onClick={handleShowNav} /> </div>
                                                }
                                            </div> :
                                            <div className='mt-[30px] lg:mt-[60px]'>
                                                <FaBars className=' text-[20px]' onClick={handleShowNav} />
                                            </div>
                                    }
                                </div>
                            </div>
                        </div> :
                        <div className='bg-none'>
                            <div className='flex  items-center gap-[100px]'>
                                <h1 className='text-[20px] lg:text-[40px] 2xl:text-[50px] font-semibold mt-[30px] lg:mt-[60px] ml-[30px] lg:ml-[0px]'>SAYEED ISHTIAQUE</h1>

                                {/* Small Device */}
                                <div className='block lg:hidden'>
                                    {
                                        !show &&
                                            <div className='mt-[30px] lg:mt-[60px]'>
                                                <FaBars className=' text-[20px]' onClick={handleShowNav} />
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                }
                <div className='hidden lg:block'>
                    <div className='flex gap-[70px] text-[20px] mt-[60px]'>
                        <p>FATURED PROJECTS</p>
                        <p>CONTACT</p>
                    </div>
                </div>
            </div>
            {
                show && <div className='bg-slate-900 h-[80vh] block lg:hidden whiteBackground'>
                    <Link to="/"><p className='text-white mt-[50px] mb-[30px]'>HOME</p></Link>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <Link to="/about"><p className='text-white  mb-[30px]'>ABOUT</p></Link>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <p className='text-white  mb-[30px]'>PORTFOLIO</p>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <p className='text-white  mb-[30px]'>CONTACT</p>
                </div>
            }
        </div>
    );
};

export default Navbar;