import React from 'react';
import "./FeaturedProjects.css"
import imageOne from "../../../assets/Featured/LaurynJohnSPEdits-103-scaled-1046x697.jpg"
import imageTwo from "../../../assets/Featured/BecAri_SneakPeekEdits-49-scaled-1046x697.jpg"

const FeaturedProjects = () => {

    return (
        <div className='bg-slate-950 p-10'>
           <div className='container mx-auto'>
               <h1 className='text-white text-[30px] lg:text-[40px] mt-[20px] mb-[30px]'>FEATURED PROJECTS</h1>
               <div className='grid  grid-cols-1 lg:grid-cols-2 gap-[40px]'>
                    <div>
                        <img src={imageOne} alt="DreamWeaver Featured Gallery" className='imgOne'/>
                        <div className='imgTitle text-white'>
                            <h1 className=''>John & Lauryn</h1>
                            <p className='text-[20px] text-left'>Hawaii</p>
                        </div>
                    </div>
                    <div>
                        <img src={imageTwo} alt="DreamWeaver Featured Gallery" className='imgOne'/>
                        <div className='imgTitle text-white'>
                            <h1 className=''>Rebecca & Ari</h1>
                            <p className='text-[20px] text-left'>Melbourne</p>
                        </div>
                    </div>
               </div>
           </div>
        </div>
    );
};

export default FeaturedProjects;