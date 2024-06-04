import { useState, useEffect } from 'react'
import {Outlet} from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'

function App() {
  const [patient, setPatient] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    fetch("/check_session")
    .then(r =>{
      if (r.ok){
        r.json().then(patient=>{
          setPatient(patient)
          setLoggedIn(true)
      });
      };
    });
  },[]);

  return (
    <>
      <header>
        <NavBar/>
      </header>
      <Outlet context={{patient:patient, loggedIn: loggedIn, setLoggedIn: setLoggedIn}}/>
    </>
  );
}

export default App
