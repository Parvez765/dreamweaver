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

    const [showSubOptions, setShowSubOptions] = useState(false);

    const handleOut = () => {
       setTimeout(()=> {
        setShowSubOptions(false)
       }, 1200)
    }

    return (
        <div className='container mx-auto navContainer'>
            {/* Large Device */}
            <div className='flex gap-[70px] justify-center items-center'>
                <div className='hidden lg:block'>
                    <div className='flex gap-[70px] text-[20px] mt-[60px]'>
                       <Link to ="/"><p>HOME</p></Link>
                       <Link to="/about"><p>ABOUT</p></Link>
                        <ul>
                             <Link onMouseEnter={() => setShowSubOptions(true)}
                            onMouseLeave={handleOut}><p className='navbarLink'>PORTFOLIO</p></Link>
                            {
                                showSubOptions &&  <div className='subLink cursor-pointer'>
                                <Link to="/portrait"><li>Portraits</li></Link>
                                <Link to="/couple"><li>Couples</li></Link>
                                <Link to="/moment"><li>Moments</li></Link>
                             </div> 
                            }
                           
                       </ul>
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
                       <Link to="/featured"><p>FEATURED PROJECTS</p></Link>
                       <Link to="/contact"><p>CONTACT</p></Link>
                    </div>
                </div>
            </div>
            {
                show && <div className='bg-slate-900 h-[80vh] block lg:hidden whiteBackground'>
                    <Link to="/"><p className='text-white mt-[50px] mb-[30px]'>HOME</p></Link>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <Link to="/about"><p className='text-white  mb-[30px]'>ABOUT</p></Link>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                   {/* <Link to="/portfolio"><p className=''>PORTFOLIO</p></Link> */}
                   <ul>
                             <Link onMouseEnter={() => setShowSubOptions(true)}
                            onMouseLeave={handleOut}><p className='navbarLink text-white  mb-[30px]'>PORTFOLIO</p></Link>
                            {
                                showSubOptions &&  <div className='subLink cursor-pointer text-white'>
                                <Link to="/portrait"><li>Portraits</li></Link>
                                <Link to="/couple"><li>Couples</li></Link>
                                <Link to="/moment"><li>Moments</li></Link>
                             </div> 
                            }
                           
                       </ul>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <Link to="/featured"><p className='text-white  mb-[30px]'>FEATURED PROJECTS</p></Link>
                    <hr className='w-[300px] block mx-auto -mt-[10px] mb-[10px]'></hr>
                    <Link to='/contact'><p className='text-white  mb-[30px]'>CONTACT</p></Link>
                </div>
            }
        </div>
    );
};

export default Navbar;