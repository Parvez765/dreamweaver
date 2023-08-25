import React from 'react';
import Hero from '../../Components/HomeComponent/Hero';
import Portfolio from '../../Components/HomeComponent/Portfolio/Portfolio';
import FeaturedProjects from '../../Components/HomeComponent/FeaturedProjects/FeaturedProjects';
import AboutMe from '../../Components/HomeComponent/AboutMe/AboutMe';
import HireMe from '../../Components/HomeComponent/HireMe/HireMe';
import LatestLove from '../../Components/HomeComponent/LatestLove/LatestLove';


const HomePage = () => {
    return (
        <div>
            <Hero/>
            <Portfolio/>
            <FeaturedProjects/>
            <AboutMe/>
            <HireMe/>
            <LatestLove/>
        </div>
    );
};

export default HomePage;