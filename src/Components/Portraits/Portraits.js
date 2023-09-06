import React from 'react';
import "./Potraits.css"
import image from "../../assets/Potraites/Villa_del.jpg"
import imageTwo from "../../assets/Potraites/Lake_como.jpg"
import imageThree from "../../assets/Potraites/Other.jpg"
import imageFour from "../../assets/Potraites/OtherSide.jpg"

const Portraits = () => {
    return (
       <div>
            <div className='portaitesImage'>
                <h1 className='imageText'>CURATED GALLERIES</h1>
            </div>
            <div className='portaitesImage lg:-mt-[362px]'>
                <h1 className='imageTexts'>CURATED GALLERIES</h1>
            </div>
            <div className='portaitesImage lg:-mt-[362px]'>
                <h1 className='imageText'>CURATED GALLERIES</h1>
            </div>
            <div className='portaitesImage lg:-mt-[362px]'>
                <h1 className='imageTexts'>CURATED GALLERIES</h1>
            </div>
       </div>
    );
};

export default Portraits;