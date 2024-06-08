import React,{useEffect, setState} from 'react'
import LoginForm from '../components/LoginForm'
import {useOutletContext} from "react-router-dom"

function Login(){

    const {patient, loggedIn} = useOutletContext()
    //Have some conditional to check that the user if logged in
    if (loggedIn.loggedIn){
        return(<h3>Hi {patient.patient.name}. You're already logged in!</h3>)
    }

    return(
        <div className = "container">
            <h3>Enter your credentials below and press submit to Sign In</h3>
            <LoginForm setLoggedIn={loggedIn.setLoggedIn} patient={patient.patient}/>
        </div>
    );

}

export default Login