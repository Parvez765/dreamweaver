import React, { useState } from 'react';
import projects from "../../data/latestData"
import "./FeaturedComponent.css"


const FeaturedComponent = () => {

    const [blur, setBlur] = useState(false)

    return (
        <div className='container mx-auto'>
            <h1 className='mt-[80px] text-[30px] lg:text-[40px] text-white'>Featured Projects</h1>
            <div className="grid lg:grid-cols-2 gap-[70px] mt-[80px]">
                {
                    projects?.map(project =>
                     <div>
                        <img src={project.img} alt="Latest Projects" className='lg:h-[1000px] w-full object-cover projectImage rounded-lg' />
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedComponent;