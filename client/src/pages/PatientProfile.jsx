import React,{useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import PatientDetails from '../components/PatientDetails'
import {useOutletContext} from "react-router-dom"
import Appointment from "../components/Appointment"

function PatientProfile(){

    const {patient, loggedIn} = useOutletContext()
    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        fetch('/api/appointments')
        .then(r => {if(r.ok){
            r.json().then(appointments=>setAppointments(appointments))
            }
        }
        )
    })

    function updatedAppointmentList(updatedAppointment){
        const newAppointmentList= appointments.map(appointment=>{
            if(appointment.id === updatedAppointment.id){
                return updatedAppointment
            }
            return appointment
        })
        setAppointments(newAppointmentList)
    }

    function removeAppointment(deletedAppointment){
        const newAppointmentList = appointments.filter(appointment=>appointment.id!==deletedAppointment.id)
        setAppointments(newAppointmentList)
    }
    
    const displayAppointments = appointments.map(appointment=>{
        return <Appointment key={appointment.id} appointment={appointment} onDeleteAppointment={removeAppointment} onUpdateAppointment={updatedAppointmentList}/>
    })
    

    if(loggedIn[0]){
        return(
            <div className = "bg-yellow-100">
                <Link to="/make_appointment">
                    <button className = "bg-transparent hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Make a New Appointment</button>
                </Link>
                <h3 className="font-bold text-center">
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails patient={patient[0]}/>
                <div className="">{displayAppointments}</div>
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