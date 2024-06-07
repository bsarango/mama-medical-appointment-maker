import React,{useEffect, useState} from 'react'
import PatientDetails from '../components/PatientDetails'
// import Appointments from '../components/Appointments'
import Appointment from "../components/Appointment"

function PatientProfile({loggedIn, patient}){

    const [appointments, setAppointments] = useState([])

    useEffect(()=>{
        fetch('/appointments')
        .then(r => {if(r.ok){
            r.json().then(appointments=>setAppointments(appointments))
            }
        }
        )
    })

    const displayAppointments = appointments.map(appointment=>{
        return <Appointment key={appointment.id} />
    })
    

    if(loggedIn){
        return(
            <div>
                <h3>
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails patient={patient}/>
                {/* <Appointments patient = {patient}/> */}
                <div>{displayAppointments}</div>

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