import React from 'react'
import PatientProfile from '../components/PatientProfile'
import Appointments from '../components/Appointments'

function PatientProfile(){


    if (loggedIn) {
        return(
            <>
                <h3>
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails/>
                <Appointments/>
            </>
        )
    }

    return(
        <>
            <p>You are currently no logged in. Log in to view your profile or return Home</p>
        </>
    )
    
}

export default PatientProfile