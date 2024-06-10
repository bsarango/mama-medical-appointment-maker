import React,{useEffect, setState} from 'react'
import LoginForm from '../components/LoginForm'
import {useOutletContext} from "react-router-dom"

function Login(){

    const {patient, loggedIn} = useOutletContext()
    //Have some conditional to check that the user if logged in
    if (loggedIn[0]){
        return(<h3>Hi {patient[0].name}. You're already logged in!</h3>)
    }

    return(
        <div className = "container">
            <h3>Enter your credentials below and press submit to Sign In</h3>
            <LoginForm setLoggedIn={loggedIn[1]} setPatient={patient[1]}/>
        </div>
    );

}

export default Login