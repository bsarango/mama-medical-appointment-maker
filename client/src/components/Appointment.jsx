import React from 'react'

function Appointment({appointment,}){
    <div>
            <h3>{appointment.title}</h3>
            <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            <h3>{appointment.details}</h3>
            <button onClick={handleUpdate}>Update Appointment</button>
            <button onClick={handleDelete}>Cancel Appointment</button>
     </div>
}