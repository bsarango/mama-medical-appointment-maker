import React from 'react'

function Physician({physician}){
    return(
        <div className="border py-1">
            <img src={physician.img} alt="Physician"/>
            <h2>Dr. {physician.last_name} {physician.first_name}</h2>
            <br></br>
            <h3>Specialty: {physician.specialty}</h3>
            <br></br>
            <h3>Office Location {physician.office_address}</h3>
            <br></br>
            <h3>Office Number{physician.office_number}</h3>
            <p>Dr. {physician.last_name} is a renowned doctor in the field of {physician.specialty}.</p>
        </div>
    )
}

export default Physician