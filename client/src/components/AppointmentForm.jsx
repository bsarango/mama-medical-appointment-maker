import React, {useState, useEffect} from 'react';

function AppointmentForm({physicians, createAppointment}){

    //Remove this
    const initialValues = {
        title : "",
        dateAndTime : "",
        specialty: "",
        details: "",
    };

    const [appointment, setAppointment] = useState(initialValues) //Remove this

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

    function handleChange(e){
        valueName = e.target.name;
        value = e.target.value.name;
        setAppointment(
            {...appointment,[valueName]:value}
        );
    };

    function handleSubmit(e){
        e.preventDefault();
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