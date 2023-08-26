import React from 'react';
import myImage from "../../assets/AboutMe/myImage.jpg"
import "./Title.css"

const Title = () => {
    return (
        <div className='container mx-auto mt-[50px]'>
            <div class="container cardContainer">
                <div class="card">
                    <div class="slide slide1">
                        <div class="content">
                            <div class="icon">
                                <img src={myImage} alt="Dream Weaver Introduction" className='h-[250px] w-[350px] object-cover rounded-lg'/>
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
        </div>
    );
};

export default Title;