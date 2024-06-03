import React, {useState} from 'react';

function AppointmentForm(){

    const initialValues = {
        title : "",
        dateAndTime : "",
        specialty: "",
        details: "",
    };

    const [appointment, setAppointment] = useState(initialValues)

    function handleChange(e){
        valueName = e.target.name;
        value = e.target.value.name;
        setAppointment(
            {...appointment,[valueName]: value}
        );
    };

    function handleSubmit(e){
        e.preventDefault();
        console.log(appointment)
    }

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