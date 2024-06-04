import React from 'react'
import {useState} from 'react'

function LoginForm({setLoggedIn}){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const patientCredentials = {
            username: username,
            password: password,
        }
        console.log(patientCredentials);
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