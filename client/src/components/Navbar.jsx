import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <nav className="absolute top-7 right-0 h-16 w-30">
            <NavLink 
                to="/"
                className = "nav-link bg-green-300 hover:bg-emerald-900 text-stone-800 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            >
            Home
            </NavLink>
            <NavLink 
                to="/physicians_index"
                className = "nav-link bg-green-300 hover:bg-emerald-900 text-stone-800 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            >
            Physicians
            </NavLink>
            <NavLink 
                to="/patient_profile"
                className = "nav-link bg-green-300 hover:bg-emerald-900 text-stone-800 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            >
            My Profile
            </NavLink>
            <NavLink 
                to="/signup"
                className = "nav-link bg-green-300 hover:bg-emerald-900 text-stone-800 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            >
            Signup
            </NavLink>
            <NavLink 
                to="/login"
                className = "nav-link bg-green-300 hover:bg-emerald-900 text-stone-800 font-semibold hover:text-white py-2 px-4 border border-green-300 hover:border-transparent rounded"
            >
            Login
            </NavLink>
        </nav>
    )
}

export default NavBar;