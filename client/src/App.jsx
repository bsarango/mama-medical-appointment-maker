import { useState, useEffect } from 'react'
import {Outlet} from "react-router-dom"
import './App.css'
import NavBar from './components/Navbar'

function App() {
  const [patient, setPatient] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    fetch("http://127.0.0.1:5555/check_session")
    .then(r =>{
      if (r.ok){
        r.json().then(patient=>{
          setLoggedIn(true), setPatient(patient)
      });
      };
    });
  },[]);

  return (
    <>
      <header className = "bg blue">
        MaMa by My Medical Group 
        <NavBar/>
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={e=>{setLoggedIn(false)}}>LogOut</button>
      </header>
      <Outlet context={{patient:[patient, setPatient],loggedIn:[loggedIn,setLoggedIn]}}/>
    </>
  );
}

export default App
