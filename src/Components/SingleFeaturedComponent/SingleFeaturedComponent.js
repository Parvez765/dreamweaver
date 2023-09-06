import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleFeaturedComponent = () => {
    
    const projects = useLoaderData()
    console.log(projects);

    return (
        <div className='container mx-auto mt-[70px]'>
           <div className='grid lg:grid-cols-2 gap-[70px]'>
                <div>
                    <img src={projects?.img} alt="Dream Weaver Featured Works" className='lg:h-[1000px] w-full object-cover rounded-lg'/>
                </div>
                <div className='text-white text-left'>
                    <h2 className='text-[50px]'>{projects?.name}</h2>
                    <p className='mt-[30px]'>{projects?.detailsone}</p>
                    <p className='mt-[30px]'>{projects?.detailstwo}</p>
                </div>
           </div>
           <div className='mt-[50px] grid lg:grid-cols-2'> 
                {
                    projects?.photos?.map((photo) => 
                    <div>
                         <img src={photo?.img} alt="Dream Weaver Featured Works" className='lg:h-[1000px] w-full object-cover'/>
                    </div>)
                }
           </div>
        </div>
    );
};

export default SingleFeaturedComponent;