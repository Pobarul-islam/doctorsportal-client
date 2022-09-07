import { format } from 'date-fns';
import React from 'react';

const AvailableAppoinments = ({date}) => {
    
    return (
        <div>
            <h4 className='text-xl text-secondary font-bold text-center'>Availabe appoinments on : {format (date, "PP")}</h4>
        </div>
    );
};

export default AvailableAppoinments;