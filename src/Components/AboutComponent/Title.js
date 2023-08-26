import React from 'react';
import myImage from "../../assets/AboutMe/myImage.jpg"
import "./Title.css"

const Title = () => {
    return (
        <div className='container mx-auto mt-[40px]'>
            <div class="container cardContainer">
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={myImage} alt="Dream Weaver Introduction" className='h-[250px] w-[350px] object-cover rounded-lg' />
                            </div>
                        </div>
                    </div>
                    <div class="slide slide2">
                        <div class="content">
                            <h3>
                                Sayeed Ishtiaque
                            </h3>
                            <p>WEDDINGS . LIFESTYLE . FASHION . PHOTOGRAPHY.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-white'>
                <h3 className='text-[30px] lg:text-[40px]'>Hello</h3>
                <p className=''>I'M REALLY HAPPY YOU'RE HERE</p>
                <p className='lg:w-[800px] block mx-auto mt-[30px]'>As a professionally trained photographer and creative visual artist, my job of telling the most beautiful love stories brings me so much fulfillment and joy. I’m hard-working, yet light-hearted. I love music, movies and most of all, my adorable family. I’m powered by Intelligentsia coffee, green juices filled with crazy superfood concoctions and the thrill of my last mountain bike ride. I love luminous light, beautiful architecture and couples who are deeply in love and who care about creating a magical experience for their wedding day.<br/><br/> What does all of this mean for you? With over nine years of experience documenting beautiful weddings around the globe, you can trust me to never miss those important details, candids and spontaneous moments. You can be sure I’ll direct you effortlessly with a guided approach, to allow for a refined, fine art look that always displays authentic emotion.</p>
               
            </div>
        </div>
    );
};

export default Title;