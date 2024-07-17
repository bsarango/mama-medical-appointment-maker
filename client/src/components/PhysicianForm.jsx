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
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
            <label
                className="block text-emerald-700 text-sm font-bold mb-2"
            >
                First Name
            </label>
            <input
                className="border-2"
                value = {firstName}
                onChange={e=>{setFirstName(e.target.value)}}
            ></input>
            <br></br>
            <label
                className="block text-emerald-700 text-sm font-bold mb-2"
            >
                Last Name
            </label>
            <input
                className="border-2"
                value = {lastName}
                onChange={e=>{setLastName(e.target.value)}}
            />
            <br></br>
            <label
                className="block text-emerald-700 text-sm font-bold mb-2"
            >
                Specialty
            </label>
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
            <label
                className="block text-emerald-700 text-sm font-bold mb-2"
            >
                Office Address
            </label>
            <input
                className="border-2"
                value={officeAddress}
                onChange={e=>{setOfficeAddress(e.target.value)}}
            />
            
            <label
                className="block text-emerald-700 text-sm font-bold mb-2" 
            >
                Office Number
            </label>
            <input
                className="border-2 rounded"
                value={officeNumber}
                onChange={e=>{setOfficeNumber(e.target.value)}}
            />
            
            <button 
                className="bg-emerald-400 rounded hover:bg-green-600 "
                type="submit"
            >
            Submit Physician
            </button>
        </form>
        </div>
    )
}

export default PhysicianForm