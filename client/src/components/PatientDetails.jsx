import React from 'react'

function PatientDetails(patient){

    return(
        <>
            <div>
                <h4>{patient.name}</h4>
                <h4>{patient.dob}</h4>
                <h4>{patient.address}</h4>
                <h4>{patient.phone_number}</h4>
            </div>
        </>
    )
}

export default PatientDetails