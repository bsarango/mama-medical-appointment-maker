import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Appointments from './components/Appointments'

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
    <header>
      <NavBar/>
      

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */} 
    </header>
  );
}

export default App
