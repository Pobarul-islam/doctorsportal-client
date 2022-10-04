import React, { useState } from 'react';
import { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [Appointments, setAppointments] = useState([]);
      const [user] = useAuthState(auth);

     useEffect(() => {
       if (user) {
         fetch(`http://localhost:5000/booking?patient=${user.email}`)
           .then((res) => res.json())
           .then((data) => setAppointments(data));
       }
     }, [user]);
    return (
      <div>
        <h2>My Appointments: {Appointments.length}</h2>
       
      </div>
    );
};

export default MyAppointments;