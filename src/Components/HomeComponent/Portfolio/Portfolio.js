import React from 'react';
import wolf from "../../../assets/Portfolio/wolf.jpg"
import secondImage from "../../../assets/Portfolio/GeorgiaLee_SPEdits-2-scaled.jpg"
import thirdImage from "../../../assets/Portfolio/GeorgiaLee_SPEdits-3-scaled-980x653.jpg"
import fourthImage from "../../../assets/Portfolio/GeorgiaLee_SPEdits-4-scaled-640x427.jpg"
import "./Portfolio.css"

const Portfolio = () => {
    return (
        <div className='bg-slate-950 p-10'>
           <div className='container mx-auto'>
            <div className='flex  flex-col justify-center lg:flex-row gap-[40px]'>
                    <div>
                        <div className='text-white'>
                            <p>PORTFOLIO HIGHLIGHT</p>
                            <h1 className='text-[40px] mt-[10px] leading-[50px]'>Georgia Love & Lee |<br/> Tasmania</h1>
                        </div>
                        <div className='mt-[50px]'>
                            <img src={wolf} alt="Dream Weaver Portfolio"/>
                        </div>
                    </div>
                    <div>
                        <img src={secondImage} alt="Dream Weaver Portfolio" className='mb-[40px] lg:w-[550px] lg:h-[450px] secondImage'/>
                        <img src={thirdImage} alt="Dream Weaver Portfolio" className='mb-[40px] lg:w-[550px] lg:h-[450px] secondImage'/>
                    </div>
                    <div className='flex flex-col-reverse lg:flex-col justify-around'>
                       <div className='text-white mt-[15px]'>
                            <h2 className='text-[80px] font-medium'>72</h2>
                            <p className='text-[40px] -mt-[30px]'>Photos</p>
                            <div className='mt-[15px] lg:mt-[30px] mb-[20px] lg:mb-[0px]'><button className='viewBtn'>View Gallery</button></div>
                       </div>
                       <div>
                        <img src={fourthImage} alt="Dream Weaver Portfolio" className='-mt-[40px] lg:mt-[0px] lg:w-[400px] lg:h-[450px] secondImage'/>
                      
                    </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Portfolio;