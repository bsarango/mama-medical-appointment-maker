import { useState, useEffect } from 'react'
import {Outlet} from "react-router-dom"
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
          setLoggedIn(true)
      });
      };
    });
  },[]);

  return (
    <>
      <header>
        <NavBar/>
        <button onClick={e=>{setLoggedIn(false)}}>LogOut</button>
      </header>
      <Outlet context={{patient:[patient, setPatient],loggedIn:[loggedIn,setLoggedIn]}}/>
    </>
  );
}

export default App
