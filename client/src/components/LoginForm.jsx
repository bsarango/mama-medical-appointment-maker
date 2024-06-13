import React from 'react'
import {useState} from 'react'

function LoginForm({setPatient, setLoggedIn}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const credentialsObj = {
            username : username,
            password : password
        }
        fetch('http://127.0.0.1:5000/login',
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body : JSON.stringify(credentialsObj),
        })
        .then(r=>{if(r.ok){
            r.json().then(signedInPatient=>{console.log(signedInPatient), setPatient(signedInPatient),setLoggedIn(true)})
        }})
        
    };

    return(
        <div>
            <h2>Please Enter Your Username and Password to Login!</h2>
            <form className="container md:max-auto px-4 border-solid border-2 border-green-600 outline box-border h-64 w-80 p-4 border-4 text-center absolute inset-1/2 top-48" onSubmit = {handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    className="border-solid border-2 border-green-600"
                    id = "username"
                    type = "text"
                    name = "username"
                    value = {username}
                    onChange = {e=>setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    className="border-solid border-2 border-green-600"
                    id = "password"
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <button type="submit" className="bg-green-200 hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm