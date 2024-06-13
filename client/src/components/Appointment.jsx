import React,{useState} from 'react'
import Calender from './Calender'
import TimePicker from './TimePicker'

function Appointment({appointment, onDeleteAppointment, onUpdateAppointment}){
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")

    function handleUpdate(e){
        e.preventDefault()

        const appointmentValue = date + "-" + time
        console.log(appointmentValue)

        fetch(`/api/appointments/${appointment.id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                dateAndTime: appointmentValue,
            }),
        })
            .then(r=>{if(r.ok){r.json()
            .then(updatedAppointment=>onUpdateAppointment(updatedAppointment)
            )
        }})
        
    }

    function handleCancelation(e){
        fetch(`/api/appointments/${appointment.id}`,
        {
            method: "DELETE",
        })
        .then(r=>{if(r.ok){r.json()
            .then(()=>onDeleteAppointment(appointment))
        }})
    }


    return(
        <div className= "text-center px-1 text-wrap">
            <h3 className="font-bold">{appointment.title}</h3>
            <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            <h3 className="flex indent-60 text-pretty">{appointment.details}</h3>
            <br></br>
            <h3 className="font-bold">Enter a new date and time if you wish to update your appointment</h3>
            <form onSubmit ={handleUpdate}>
                <Calender setDate = {setDate}/>
                <TimePicker setTime={setTime}/>
                <br></br>
                <button className="bg-transparent hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded" type="submit">Update Appointment</button>
            </form>
            <button className="bg-transparent hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded" onClick={handleCancelation}>Cancel Appointment</button>
        </div>
    );
}

export default Appointment