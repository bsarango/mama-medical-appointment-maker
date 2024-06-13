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
            <form className = "userForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {username}
                    onChange = {e=>setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <label htmlFor='name'>Full Name</label>
                <input
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {e=>setName(e.target.value)}
                />
                <label htmlFor='dob'>Date of Birth</label>
                <Calender setDate={setDob}/>
                <label htmlFor='address'>Address</label>
                <input
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange = {e=>setAddress(e.target.value)}
                />
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    type = "text"
                    name = "phoneNumber"
                    value = {phoneNumber}
                    onChange = {e=>setPhoneNumber(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm