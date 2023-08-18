import React from 'react';
import './Hero.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import  SwiperCore from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const Hero = () => {
    
    return (
        <div className='-mt-[180px] lg:-mt-[140px] heroSection'>
           <div className='heroContainer'>
           <Swiper
                spaceBetween={50}
                slidesPerView={1}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
            >
                <SwiperSlide>
                    <div className='sliderOne'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderTwo'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='sliderThree'>

                    </div>
                </SwiperSlide>
            </Swiper>
           </div>
            
        </div>
    );
};

export default Hero;
