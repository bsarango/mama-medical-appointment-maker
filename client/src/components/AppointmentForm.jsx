import React, {useState, useEffect} from 'react';
import Calender from './Calender';
import TimePicker from './TimePicker'

function AppointmentForm({physicians, createAppointment}){

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [selectedPhysicain, setSelectedPhysician] = useState(null)

    const physicianOptions = physicians.map(physician=>{
        return (
            <option 
                key={physician.id} 
                value={physician.id}
            >
                <img>{physician.image}</img>
                <h4>Dr. {physician.first_name} {physician.last_name}</h4>
            </option>
        )
    });

    function handleSubmit(e){
        e.preventDefault();

        const appointmentObj = {
            title : title,
            dateAndTime : date + "-" + time,
            specialty : specialty,
            details : `Please be ready for your upcoming ${title} appointment. Please come with your medical history, insurance card, and any health concerns you have prior to the appointment. We look forward to seeing you!`,
            physician : selectedPhysicain,
        }

        fetch('/appointments',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(appointmentObj),
        })
        .then(r=>{if(r.ok){
            r.json().then(newAppointment=>console.log("New Appointment Made!"))
        }})
        console.log(newAppointment)
    }
//Make a scroll down to select physician for the appointment
    return(
        <div>
            <h2>Please enter all the fields </h2>
            <form className = "userForm" onSubmit = {handleSubmit}>
                <label> Enter the type of or reason for Appointment</label>
                <input
                    type = "text"
                    name = "title"
                    value = {appointment.name}
                    onChange = {(e)=>{setTitle(e.target.value)}}
                />
                <label>Select a date</label>
                    <Calender setDate={setDate}/>
                <label>Select a Time</label>
                    <TimePicker setTime={setTime}/>
                <label>Select Physician</label>
                <select onChange={(e)=>{setSelectedPhysician(e.target.value)}}>
                    {physicianOptions}
                </select>
            </form>
        </div>
    );
}

export default AppointmentForm