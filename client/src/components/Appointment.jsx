import React,{useState} from 'react'

function Appointment({appointment, setAppointment}){
    const [updateAppointment, setUpdateAppointment] = useState(false)
    
    function displayUpdateOptions(){
        if(updateAppointment){
            return (
                <form onSubmit ={handleUpdate}>
                    <>{/*Display calender and clock*/}</>
                    <button type="submit">Update Appointment</button>
                </form>
            )
        }
    };

    function handleUpdate(e){
        e.preventDefault()
        fetch(`/appointment/${appointment.id}`,{/*set Patch request*/})
        .then(r=>{if(r.ok){
            r.json().then(
                updatePatient=>console.log("Appointment updated")
            )
        }
        })
        {/*Add function to map out new appointments*/}
    }

    function handleCancelation(e){
        fetch(`appointment/${appointment.id}`,{/*Fetch body for delete*/})
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