import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar(){
    return(
        <nav>
            <NavLink to="/"
                exact
            >
                Home
            </NavLink>
            <NavLink to="/physicians_index"
                exact
            >
                Physicians
            </NavLink>
            <NavLink to="/patient_profile/<int:id>"
                exact
            >
                My Profile
            </NavLink>
            <NavLink to="/signup"
                exact
            >
                Signup
            </NavLink>
            <NavLink to="/login"
                exact
            >
                Login
            </NavLink>
        </nav>
    )
}

export default NavBar;