import React from 'react'

function PatientDetails({patient}){

    return(
        <div className="text-wrap text-center">
            <h3>Your Profile:</h3>
            <br></br>
            <p>{patient.name}</p>
            <p>{patient.dob}</p>
            <p>{patient.address}</p>
            <p>{patient.phone_number}</p>
            <br></br>
        </div>
    )
}

export default PatientDetails