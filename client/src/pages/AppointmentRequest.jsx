import React,{useEffect, useState} from 'react'
import AppointmentForm from '../components/AppointmentForm'

function AppointmentRequest(){

    const [physicians, setPhysicians] = useState([])

    useEffect(()=>{
        fetch("/physicians_index")
        .then(r=>{
            if(r.ok){
                r.json().then(physicianList=>setPhysicians(physicianList))
            }
        });
    }, []);

    function addAppointment(e){
        e.preventDefault()
        fetch("/appointments",{/*Add post code8*/})
        .then(r=>{
            if(r.ok){
                r.json()
                .then(newAppointment=>console.log("Appointment Added"))
            }
        });
    }

    return(
        <div>
            <h2>Enter the information for your Appointment</h2>
            <AppointmentForm createAppointment={addAppointment} physicians={physicians}/>
        </div>
        
    )
}

export default AppointmentRequest