import React,{useEffect, useState} from 'react'
import AppointmentForm from '../components/AppointmentForm'

function AppointmentRequest(){

    const [physicians, setPhysicians] = useState([])

    useEffect(()=>{
        fetch("http://127.0.0.1:5555/physicians_index")
        .then(r=>{
            if(r.ok){
                r.json().then(physicianList=>setPhysicians(physicianList))
            }
        });
    }, []);

    return(
        <div>
            <h2>Enter the information for your Appointment</h2>
            <AppointmentForm createAppointment={addAppointment} physicians={physicians}/>
        </div>
        
    )
}

export default AppointmentRequest