import React from 'react'
import PatientDetails from '../components/PatientDetails'
import Appointments from '../components/Appointments'

function PatientProfile({loggedIn, patient}){

    if(loggedIn){
        return(
            <>
                <h3>
                    View your current appointments and information. You can cancel or update your appointment by selecting the respective option.
                </h3>
                <PatientDetails patient={patient}/>
                <Appointments patient = {patient}/>
            </>
        )
    };

    return(
        <>
            <p>You are currently no logged in. Log in to view your profile or return Home</p>
        </>
    );
    
}

export default PatientProfile