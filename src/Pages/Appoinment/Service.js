import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
       <div className="card  w-96 ml-6 mt-5 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title text-secondary">{name}</h2>
                <p>{slots.length > 0
                    ? <span>{slots[0]} </span>
                    : <span className='text-red-500'>Try another date.</span>
                }
                </p>
                
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available </p>
                 <div className="card-actions justify-center">
                    <button
                       
                        className=""></button>
                    <label
                        for="booking-modal"
                         disabled={slots.length === 0}
                        onClick={()=>setTreatment (service)}
                        className="btn btn-secondary text-white uppercase">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;