import React from 'react'
import {useState} from 'react'

function LoginForm(){

    function handleSubmit(){

    };

    function handleChange(){

    };

    return(
        <div>
            <h2>Please Enter Your Username and Password to Login!</h2>
            <form className="userForm" onSubmit = {handleSubmit}>
                <label>Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = 
                    onChange = {handleChange}
                >

                </input>
            </form>
        </div>
    )
}