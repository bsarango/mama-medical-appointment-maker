import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Home from './pages/Home.jsx'
import './index.css'
import AppointmentRequest from './pages/AppointmentRequest.jsx'

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
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider route = {router}/>
)
