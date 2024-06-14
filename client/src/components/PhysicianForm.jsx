import React, {useState} from 'react';

function PhysicianForm({onAddPhysician}){
    
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[specialty, setSpecialty] = useState("")
    const[officeAddress, setOfficeAddress] = useState("")
    const[officeNumber, setOfficeNumber] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const formValues={
            firstName: firstName,
            lastName: lastName,
            specialty: specialty,
            officeAddress: officeAddress,
            officeNumber: officeNumber
        }

        fetch('/api/physicians',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(formValues),
        })
        .then(r=>{if(r.ok){
            r.json().then(newPhysician=>onAddPhysician(newPhysician))
        }})
    }

    return(
        <form>
            <label>First Name</label>
            <input
                value = {firstName}
                onChange={e=>{setFirstName(e.target.value)}}
            ></input>
            <br></br>
            <label>Last Name</label>
            <input
                value = {lastName}
                onChange={e=>{setLastName(e.target.value)}}
            />
            <br></br>
            <label>Specialty</label>
            <select onChange = {e=>{setSpecialty(e.target.value)}}>
                <option
                    value = "cardiology"
                >
                    Cardiology
                </option>
                <option
                    value = "pediatrics"
                >
                    Pediatrics
                </option>
                <options
                    value="primary care"
                >
                    Primary Care
                </options>
                <options
                    value="nephrology"
                >
                    Nephrology
                </options>
                <options
                    value="obstetrics and gynecology"
                >
                    OBGYN
                </options>
                <options
                    value="pulmonary"
                >
                    Pulmonary
                </options>
                <options
                    value="endocrinology"
                >
                    Endocrinology
                </options>
                <options
                    value='dermatology'
                >
                    Dermatology
                </options>
            </select>
            <br></br>
            <label>Office Address</label>
            <input
                value={officeAddress}
                onChange={e=>{setOfficeAddress(e.target.value)}}
            />
             <label>Office Number</label>
            <input
                value={officeNumber}
                onChange={e=>{setOfficeNumber(e.target.value)}}
            />
            <button type="submit" onSubmit={handleSubmit}>Submit Physician</button>
        </form>
    )
}

export default PhysicianForm