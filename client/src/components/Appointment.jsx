import React,{useState} from 'react'
import Calender from './Calender'
import TimePicker from './TimePicker'

function Appointment({appointment, onDeleteAppointment, onUpdateAppointment}){
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    function handleUpdate(e){
        e.preventDefault()

        const appointmentValues = {
            dateAndTime : date + "-" + time,
        }

        fetch(`/api/appointment/${appointment.id}`,{
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
        fetch(`/api/appointment/${appointment.id}`,
        {
            method: "DELETE",
        })
        .then(r=>{if(r.ok){r.json()
            .then(()=>onDeleteAppointment(appointment))
        }})
    }


    return(
        <div className="text-center">
            <h3>{appointment.title}</h3>
            <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            <h3>{appointment.details}</h3>
            <br></br>
            <h3>Enter a new date and time if you wish to update your appointment</h3>
            <form onSubmit ={handleUpdate}>
                    <Calender setDate = {setDate}/>
                    <TimePicker setTime={setTime}/>
                    <button type="submit">Update Appointment</button>
                </form>
            <button onClick={handleCancelation}>Cancel Appointment</button>
        </div>
    );
}

export default Appointment