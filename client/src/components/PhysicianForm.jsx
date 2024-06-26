import React, {useState} from 'react';

function PhysicianForm({onAddPhysician}){
    
    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[specialty, setSpecialty] = useState("")
    const[officeAddress, setOfficeAddress] = useState("")
    const[officeNumber, setOfficeNumber] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const formValues={
            firstName: firstName,
            lastName: lastName,
            specialty: specialty,
            officeAddress: officeAddress,
            officeNumber: officeNumber
        }

        fetch('/api/physicians_index',
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
        <form onSubmit={handleSubmit}>
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
                <option
                    value="primary care"
                >
                    Primary Care
                </option>
                <option
                    value="nephrology"
                >
                    Nephrology
                </option>
                <option
                    value="obstetrics and gynecology"
                >
                    OBGYN
                </option>
                <option
                    value="pulmonary"
                >
                    Pulmonary
                </option>
                <option
                    value="endocrinology"
                >
                    Endocrinology
                </option>
                <option
                    value='dermatology'
                >
                    Dermatology
                </option>
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
            <button type="submit">Submit Physician</button>
        </form>
    )
}

export default PhysicianForm