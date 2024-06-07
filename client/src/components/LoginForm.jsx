import React from 'react'
import {useState} from 'react'

function LoginForm({setLoggedIn}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const credentialsObj = {
            username : username,
            password : password
        }
        fetch('http://127.0.0.1:3000/login',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(credentialsObj),
        })
        .then(r=>{if(r.ok){
            r.json().then(signedInPatient=>console.log(signedInPatient,"New Appointment Made!"))
        }})
        setLoggedIn(true)
    };

    return(
        <div>
            <h2>Please Enter Your Username and Password to Login!</h2>
            <form className="userForm" onSubmit = {handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    id = "username"
                    type = "text"
                    name = "username"
                    value = {username}
                    onChange = {e=>setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    id = "password"
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm