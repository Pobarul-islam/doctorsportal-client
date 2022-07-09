import React from 'react';
import Banner from './Banner';
import CareSection from './CareSection';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services'
import Testimonial from './Testimonial';
const Home = () => {
    return (
        <div  className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <CareSection></CareSection>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;