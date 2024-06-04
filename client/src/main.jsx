import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Login from './pages/Login.js'
import Signup from './pages/Signup.js'
import './index.css'

const router = createBrowserRouter ([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/signup",
    element: <Signup/>
  },
  {
    path:"/login",
    element: <Login/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider route = {router}/>
)
