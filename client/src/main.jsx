import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import './index.css'
import AppointmentRequest from './pages/AppointmentRequest'
import PatientProfile from './pages/PatientProfile'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/signup",
        element: <Signup/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/make_appointment",
        element: <AppointmentRequest/>
      },
      {
        path:"/patient_profile",
        element:<PatientProfile/>
      }
    ]
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router = {router}/>)
