import React,{useEffect, setState} from 'react'
import LoginForm from '../components/LoginForm'

function Login({loggedIn, setLoggedIn, patient}){

    //Have some conditional to check that the user if logged in
    {/* if (loggedIn) {return(<h3>Hi {patient.name}. You're already logged in!</h3>)}*/}

    return(
        <div>
            <p>Enter your credentials below and press submit to Sign In</p>
            <LoginForm setLoggedIn={setLoggedIn} patient={patient}/>
        </div>
    );

}

export default Login