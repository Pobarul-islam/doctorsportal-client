import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard CardTitle="Openning Hours" bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500" img={clock}></InfoCard>
            <InfoCard CardTitle="Our Locations" bgclassName="bg-accent" img={marker}></InfoCard>
            <InfoCard CardTitle="Contact us" bgclassName="bg-gradient-to-r from-cyan-500 to-blue-500" img={phone}></InfoCard>
        </div>
    );
};

export default Info;