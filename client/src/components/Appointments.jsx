import React, {useState, useEffect} from 'react';
import Appointment from '../components/Appointment'

function Appointments(){

    const [appointments, setAppointments] = useState([])

    function handleUpdate(updatedAppointment){
        const updatedAppointments = appointments.map(appointment=>{
            if(appointment.id == updatedAppointment.id){
                return updatedAppointment
            }
            return appointment
        })
        setAppointments(updatedAppointments)
        console.log("Updated")
    }

    function handleAppointmentUpdate(){
        
    }

    function handleDelete(deletedItem){
        const updatedAppointments = appointments.filter(appointment=> appointment.id != deletedItem.id)
        setAppointments(updatedAppointments)
    }

    function handleCanceledAppointment(){

    }

    useEffect(()=>{
        fetch('/appointments')
        .then(r=>{if(r.ok){
            r.json()
            .then(patientAppointments =>setAppointments(patientAppointments))
        }});
    });
// Create an appointment component to manage props to and to create this JSX inside
    const appointmentsToDisplay = (appointments).map((appointment)=>{
        return(
            <Appointment/>
        );
    })

    

    return(
        <div>
            {appointmentsToDisplay}
        </div>
        
    );
}

export default Appointments