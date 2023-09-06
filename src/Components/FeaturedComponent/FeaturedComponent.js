import React  from 'react';
import projects from "../../data/latestData"
import "./FeaturedComponent.css"
import { Link } from 'react-router-dom';



const FeaturedComponent = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='mt-[80px] text-[30px] lg:text-[40px] text-white'>Featured Projects</h1>
            <div className="grid lg:grid-cols-2 gap-[70px] mt-[80px]">
                {
                   projects?.map((project) =>
                    <div>
                        <Link to={`/featured/${project.id}`}><img src={project.img} alt="Latest Projects" className='lg:h-[1000px] w-full object-cover projectImage rounded-lg'/></Link>
                    </div>)
                }
            </div>
        </div>
    );
};

export default FeaturedComponent;