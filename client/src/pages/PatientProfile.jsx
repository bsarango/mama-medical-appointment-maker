import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import PatientDetails from '../components/PatientDetails'
import {useOutletContext} from "react-router-dom"
import Appointment from "../components/Appointment"

function PatientProfile(){

    const {patient, loggedIn} = useOutletContext()
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:5555/appointments')
        .then(r => {if(r.ok){
            r.json().then(appointments=>setAppointments(appointments))
            }
        }
        )
    })

    function removeAppointment(deletedAppointment){
        const newAppointmentList = appointments.filter(appointment=>appointment.id!==deletedAppointment.id)
        setAppointments(newAppointmentList)
    }
    
    const displayAppointments = appointments.map(appointment=>{
        return <Appointment key={appointment.id} appointment={appointment} onDeleteAppointment={removeAppointment}/>
    })
    

    if(loggedIn[0]){
        return(
            <div className = "container">
                <h3>
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails patient={patient[0]}/>
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