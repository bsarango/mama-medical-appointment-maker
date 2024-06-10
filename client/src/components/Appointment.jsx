import React,{useState} from 'react'
import Calender from './Calender'
import TimePicker from './TimePicker'

function Appointment({appointment, onUpdateAppointment}){
    const [updateAppointment, setUpdateAppointment] = useState(false)
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    function displayUpdateOptions(){
        if(updateAppointment){
            return (
                <form onSubmit ={handleUpdate}>
                    <Calender setDate = {setDate}/>
                    <TimePicker setTime={setTime}/>
                    <button type="submit">Update Appointment</button>
                </form>
            )
        }
    };

    function handleUpdate(e){
        e.preventDefault()

        const appointmentValues = {
            dateAndTime : date + "-" + time,
        }

        fetch(`http://127.0.0.1:5555/appointment/${appointment.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify(appointmentValues)
        })
        .then(r=>{if(r.ok){
            r.json().then(
                updatedAppointment=>onUpdateAppointment(updatedAppointment)
            )
        }
        })
        
    }

    function handleCancelation(e){
        fetch(`http://127.0.0.1:5555/appointment/${appointment.id}`,{/*Fetch body for delete*/})
        .then(r=>{if(r.ok){
            r.json().then(
                updatePatient=>console.log("Appointment Deleted")
            )
        }
        })
        {/*Add deletion function*/}
    }


    return(
        <div>
            <h3>{appointment.title}</h3>
            <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            <h3>{appointment.details}</h3>
            <div>{displayUpdateOptions}</div>
            <button onClick={e=>{setUpdateAppointment(true)}}>Update Appointment</button>
            <button onClick={handleDelete}>Cancel Appointment</button>
        </div>
    );
}

export default Appointment