import { useState, useEffect } from 'react'
import {Outlet} from "react-router-dom"
import './App.css'
import NavBar from './components/Navbar'

function App() {
  const [patient, setPatient] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/check_session")
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
      <header className = "bg-lime-200">
        <h2 className="font-semibold text-center">MaMa by My Medical Group </h2>
        <NavBar/>
        <button className="bg-transparent hover:bg-emerald-900 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded" onClick={e=>{setLoggedIn(false)}}>LogOut</button>
      </header>
      <Outlet context={{patient:[patient, setPatient],loggedIn:[loggedIn,setLoggedIn]}}/>
    </>
  );
}

export default App
