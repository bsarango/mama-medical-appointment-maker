import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import PatientDetails from '../components/PatientDetails'
// import Appointments from '../components/Appointments'
import Appointment from "../components/Appointment"

function PatientProfile({loggedIn, patient}){

    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:3000/appointments')
        .then(r => {if(r.ok){
            r.json().then(appointments=>setAppointments(appointments))
            }
        }
        )
    })

    function updateAppointments(updatedAppointment){
        const updatedAppointmentList = appointments.map(appointment=>{
            if(appointment.id === updatedAppointment.id){
                return updatedAppointment
            }
            return appointment
        })
        setAppointments(updatedAppointmentList)
    }
    
    const displayAppointments = appointments.map(appointment=>{
        return <Appointment key={appointment.id} appointment={appointment} onUpdateAppointment={updateAppointments}/>
    })
    

    if(loggedIn){
        return(
            <div className = "container">
                <h3>
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails patient={patient}/>
                <div>{displayAppointments}</div>
                <Link to="/make_appointment">
                    <button className = "button">Make a New Appointment</button>
                </Link>
            </div>
        )
    };

    return(
        <>
            <p>You are currently no logged in. Log in to view your profile or return Home</p>
        </>
    );
    
}

export default PatientProfile