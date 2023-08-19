import React from 'react';
import Hero from '../../Components/HomeComponent/Hero';
import Portfolio from '../../Components/HomeComponent/Portfolio/Portfolio';
import FeaturedProjects from '../../Components/HomeComponent/FeaturedProjects/FeaturedProjects';
import AboutMe from '../../Components/HomeComponent/AboutMe/AboutMe';

const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Portfolio/>
            <FeaturedProjects/>
            <AboutMe/>
        </div>
    );
};

export default HomePage;