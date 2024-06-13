import React, {useState} from 'react'
import Calender from './Calender'

function SignupForm(){


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const formValues = {
            username:username,
            password:password,
            name:name,
            dob:dob,
            address:address,
            phoneNumber:phoneNumber
        }
        
        fetch("/api/signup",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(formValues),
        })
        .then(r=>{
            if(r.ok){
                r.json()
                .then(newPatient=>{console.log(newPatient),console.log("Signup successful")})
            }
        })
        console.log(formValues)
    }

    return(
        <div>
            <form className = "text-center" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "username"
                    value = {username}
                    onChange = {e=>setUsername(e.target.value)}
                />
                <br></br>
                <label htmlFor="password">Password</label>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <br></br>
                <label htmlFor='name'>Full Name</label>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {e=>setName(e.target.value)}
                />
                <br></br>
                <label htmlFor='dob'>Date of Birth</label>
                <Calender setDate={setDob}/>
                <br></br>
                <label htmlFor='address'>Address</label>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange = {e=>setAddress(e.target.value)}
                />
                <br></br>
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    className="border-solid border-2 border-green-600 py-1 space-y-1"
                    type = "text"
                    name = "phoneNumber"
                    value = {phoneNumber}
                    onChange = {e=>setPhoneNumber(e.target.value)}
                />
                <br></br>
                <button type="submit" className="bg-green-200 hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">SignUp</button>
            </form>
        </div>
    );
};

export default SignupForm