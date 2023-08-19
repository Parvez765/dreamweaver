import React from 'react';
import "./HireMe.css"
import hireMe from "../../../assets/HireMe/Villadel.jpg"

const HireMe = () => {
    return (
        <div className='bg-black p-10'>
            <div className='container mx-auto'>
                <div className='grid lg:grid-cols-2 gap-[600px] items-center'>
                    <div className='hireMeContainer  lg:w-[1560px]'>
                        <h1 className='text-[80px] font-semibold text-white p-10'>Hello There</h1>
                        <div className='hireMeParagraph lg:w-[400px]  block mx-auto p-10 mt-[50px]'>
                            <p className='text-white text-[20px] cursor-pointer'>
                                THANK YOU FOR VISITING MY WEBSITE AND EXPLORING MY WORK. YOU ARE ON ONE OF THE MOST EXCITING AND IMPORTANT JOURNEYS OF YOUR LIFE, HOW EXCITING! YOU HAVE COME TO A PLACE OF INSPIRATION, EXPERIENCE AND KNOWLEDGE. HOPEFULLY MY WORK CONNECTS WITH YOU ON MANY LEVELS - THANK YOU FOR VISITING!</p>
                        </div>
                    </div>
                    <div>
                        <img src={hireMe} className='lg:w-[450px] flex justify-end'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HireMe;