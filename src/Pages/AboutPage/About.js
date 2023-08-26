import React from 'react';
import Title from '../../Components/AboutComponent/Title';
import LatestLove from '../../Components/HomeComponent/LatestLove/LatestLove';
import ImageDetails from '../../Components/AboutComponent/ImageDetails/ImageDetails';

const AboutPage = () => {
    return (
        <div>
            <Title/>
            <LatestLove/>
            <ImageDetails/>
        </div>
    );
};

export default AboutPage;