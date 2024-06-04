import React from 'react';

function Appointments({appointments}){

    const appointmentsToDisplay = (appointments).map((appointment)=>{
        return(
            <a href='/appointments/${id}'>
                <h3>{appointment.title}</h3>
                <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            </a>
        );
    })

    

    return(
        <div>
            {appointmentsToDisplay}
        </div>
        
    );
}

export default Appointments