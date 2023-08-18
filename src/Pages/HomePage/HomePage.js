import React from 'react';
import Hero from '../../Components/HomeComponent/Hero';
import Portfolio from '../../Components/HomeComponent/Portfolio/Portfolio';
import FeaturedProjects from '../../Components/HomeComponent/FeaturedProjects/FeaturedProjects';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Portfolio/>
            <FeaturedProjects/>
        </div>
    );
};

export default HomePage;