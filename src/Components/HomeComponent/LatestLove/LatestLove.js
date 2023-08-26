import React from 'react';
import latestdata from "../../../data/latestData"

const LatestLove = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto'>
                <h1 className='text-white mt-[100px] text-[30px] lg:text-[40px] mb-[30px]'>Latest Love On Facebook And Instagram</h1>
                <div className='grid lg:grid-cols-6 gap-[15px]'>
                  {
                    latestdata?.map(lData => <div>
                        <img src={lData.img} alt="DreamWeaver Latest Projects" className='lg:w-[300px] lg:h-[300px] rounded-lg hover:border border-xl cursor-pointer'/>
                    </div>)
                  }
                </div>
            </div>
        </div>
    );
};

export default LatestLove;