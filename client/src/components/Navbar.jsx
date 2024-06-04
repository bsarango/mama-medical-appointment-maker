import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(){
    return(
        <nav>
            <NavLink 
                to="/"
                className = "nav-link"
            >
            Home
            </NavLink>
            <NavLink 
                to="/physicians_index"
                className = "nav-link"
            >
            Physicians
            </NavLink>
            <NavLink 
                to="/patient_profile/<int:id>"
                className = "nav-link"
            >
            My Profile
            </NavLink>
            <NavLink 
                to="/signup"
                className = "nav-link"
            >
            Signup
            </NavLink>
            <NavLink 
                to="/login"
                className = "nav-link"
            >
            Login
            </NavLink>
        </nav>
    )
}

export default NavBar;