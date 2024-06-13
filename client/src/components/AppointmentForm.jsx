import React, {useState, useEffect} from 'react';
import Calender from './Calender';
import TimePicker from './TimePicker'

function AppointmentForm({physicians}){

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
                name={physician.last_name}
            >
                Dr. {physician.first_name} {physician.last_name}
            </option>
        )
    });

    const selectedSpecialty = physicians.filter(physician=>{
        if(physician.id === parseInt(selectedPhysician)){
            return physician[specialty]
        }
    });
    

    function handleSubmit(e){
        e.preventDefault();
        setSpecialty(selectedSpecialty)

        const appointmentObj = {
            title : title,
            dateAndTime : date + "-" + time,
            specialty : specialty,
            details : `Please be ready for your upcoming ${title} appointment. Please come with your medical history, insurance card, and any health concerns you have prior to the appointment. We look forward to seeing you!`,
            physician : selectedPhysician
        }
        console.log(appointmentObj)
        fetch('/api/appointments',
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
        <div className="text-center">
            <h2 className="italic">Please enter all the fields </h2>
            <form className = "userForm" onSubmit = {handleSubmit}>
                <label> Enter the type of or reason for Appointment</label>
                <br></br>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "title"
                    value = {title}
                    onChange = {(e)=>{setTitle(e.target.value)}}
                />
                <br></br>
                <label>Select an Appointment date</label>
                    <Calender setDate={setDate}/>
                <br></br>
                <label>Select a Time</label>
                    <TimePicker setTime={setTime}/>
                <br></br>
                <label>Select Physician</label>
                <select onChange={(e)=>{setSelectedPhysician(e.target.value)}}>
                    {physicianOptions}
                </select>
                <br></br>
                <button type="Submit" className="bg-green-200 hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Make Appointment</button>
            </form>
        </div>
    );
}

export default AppointmentForm