import React, {useState, useEffect} from 'react';
import Calender from './Calender';
import TimePicker from './TimePicker'

function AppointmentForm({physicians, createAppointment}){

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [selectedPhysician, setSelectedPhysician] = useState(null)

    const physicianOptions = physicians.map(physician=>{
        return (
            <option 
                key={physician.id} 
                value={physician.id}
                name = {physician.specialty}
            >
                
                Dr. {physician.first_name} {physician.last_name}
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
            physician : selectedPhysician
        }
        console.log(appointmentObj)
        fetch('http://127.0.0.1:5000/appointments',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(appointmentObj),
        })
        .then(r=>{if(r.ok){
            r.json().then(newAppointment=>console.log(newAppointment))
        }})
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
                    value = {title}
                    onChange = {(e)=>{setTitle(e.target.value)}}
                />
                <label>Select a date</label>
                    <Calender setDate={setDate}/>
                <label>Select a Time</label>
                    <TimePicker setTime={setTime}/>
                <label>Select Physician</label>
                
                {/* {()=>{setSelectedPhysician(physicians[0][id]),setSpecialty(physicians[0][specialty])}} */}
                <select onChange={(e)=>{setSelectedPhysician(e.target.value),setSpecialty(e.target.name)}}>
                    {physicianOptions}
                    {console.log(physicians)}
                </select>
                <button type="Submit">Make Appointment</button>
            </form>
        </div>
    );
}

export default AppointmentForm