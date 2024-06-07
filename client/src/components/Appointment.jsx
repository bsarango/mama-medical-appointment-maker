import React,{useState} from 'react'

const [updateAppointment, setUpdateAppointment] = useState(false)

function Appointment({appointment, onUpdate, onDelete}){
    //Consider imported AppointmentForm
    function displayUpdateOptions(){
        if(updateAppointment){
            return (
                <form onSubmit ={onUpdate}>
                    <>{/*Display calender and clock*/}</>
                    <button type="submit">Update Appointment</button>
                </form>
            )
        }
    };



    <div>
            <h3>{appointment.title}</h3>
            <h3>{appointment.date_and_time}</h3> {/*Make this look readable */}
            <h3>{appointment.details}</h3>
            <div>{displayUpdateOptions}</div>
            <button onClick={e=>{setUpdateAppointment(true)}}>Update Appointment</button>
            <button onClick={handleDelete}>Cancel Appointment</button>
     </div>
}