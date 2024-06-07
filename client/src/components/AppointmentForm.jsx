import React, {useState, useEffect} from 'react';

function AppointmentForm({physicians, createAppointment}){

    const [title, setTitle] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [specialty, setSpecialty] = useState("")
    const [details, setDetails] = useState("")

    // const physicianOptions = physicians.map(physician=>{
    //     return (
    //         <div>
    //             <img>{physician.image}</img>
    //             <h4>Dr. {physician.first_name} {physician.last_name}</h4>
    //             <button>
    //                 Set Appointment
    //             </button>
    //         </div>
    //     )
    // });

    function handleSubmit(e){
        e.preventDefault();
        fetch('/appointments',{/*Code for post*/})
        .then(r=>{if(r.ok){
            r.json().then(new_appointment=>console.log("New Appointment Made!"))
        }})
        console.log(appointment)
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
                    onChange = {handleChange}
                />
            </form>
        </div>
    );
}

export default AppointmentForm