import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id: 1,
            name: 'Floride Treatment',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:fluoride
        },
        {
            _id: 1,
            name: 'Cavity Filling',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:cavity
        },
        {
            _id: 1,
            name: 'Teeth Whitening',
            discription: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img:whitening
        }
    ]
    return (
        <div className='my-28 text-center font-bold uppercase'>
            <h3 className='text-primary'>Our Services</h3>
            <h2 className='text-4xl'>Service We Provide</h2>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>

                {
                    services.map(service => <Service
                        key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;