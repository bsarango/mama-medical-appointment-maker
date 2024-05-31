import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'

function App() {
  const [patient, setPatient] = useState(null)
  
  useEffect(()=>{
    fetch("/check_session")
    .then(r =>{
      if (r.ok){
        r.json().then(patient=>setPatient(patient));
      }
    });
  },[]);

  return (
    <>
      <NavBar/>
      <div>
        <b>MaMa by My Medical Group</b>
        <h3>Appointment making system focused on helping you obtain the best care for you needs.
          We care just like Mama did for you!
        </h3>
      </div>

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
    </>
  )
}

export default App
