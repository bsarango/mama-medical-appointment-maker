import React,{useEffect, useState} from 'react'
import AppointmentForm from '../components/AppointmentForm'

function AppointmentRequest(){

    const [physicians, setPhysicians] = useState([])

    useEffect(()=>{
        fetch("/api/physicians_index")
        .then(r=>{
            if(r.ok){
                r.json().then(physicianList=>setPhysicians(physicianList))
            }
        });
    }, []);

    return(
        <div>
            <h2>Enter the information for your Appointment</h2>
            <AppointmentForm  physicians={physicians}/>
        </div>
        
    )
}

export default AppointmentRequest