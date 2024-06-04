import React from 'react'
import {useState} from 'react'

function LoginForm({setLoggedIn, patient}){

    const initialValues = {
        username : "",
        password : "",
    };

    const [patientCredentials, setPatientCredentials] = useState(initialValues)

    function handleSubmit(){
        e.preventDefault();
        console.log(patientCredentials);
        setLoggedIn(true)
    };

    function handleChange(e){
        valueName = e.target.name
        value = e.target.value
        setPatientCredentials(
            {...patientCredentials,[valueName]: value}
        );
    };

    return(
        <div>
            <h2>Please Enter Your Username and Password to Login!</h2>
            <form className="userForm" onSubmit = {handleSubmit}>
                <label>Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {patientCredentials.username}
                    onChange = {handleChange}
                />
                <label>Password</label>
                <input
                    type = "text"
                    name = "password"
                    value = {patientCredentials.password}
                    onChange = {handleChange}
                />
            </form>
        </div>
    )
}

export default LoginForm