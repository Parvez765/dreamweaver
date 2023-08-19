import React from 'react';
import "./AboutMe.css"
import myImage from "../../../assets/AboutMe/myImage.jpg"

const AboutMe = () => {
    return (
        <div className='bg-black p-10'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-center'>
                    <div>
                        <img src={myImage} alt="Dream Weaver About Me" className='rounded-lg'/>
                    </div>
                    <div className='text-white'>
                        <h1 className='text-[60px] font-semibold'>Hi, I'm Sayeed Ishtiaque</h1>
                        <p className='text-[20px] text-justify mt-[50px]'>As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I’m powered by Intelligentsia coffee, green juices filled with crazy superfood concoctions and the thrill of my last mountain bike ride. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day.</p>
                       <div className='flex items-start mt-[50px]'><button className='readMore'>Read More</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;