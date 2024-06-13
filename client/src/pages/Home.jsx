import React, {useState, useEffect} from 'react'
import {Link, useOutletContext} from "react-router-dom"


function Home(){
    const{loggedIn} = useOutletContext() 
    console.log(loggedIn[0])
    if(loggedIn[0]){
        return(
            <main className = "container md:max-auto px-4 border-solid border-2 border-green-600 outline box-border h-64 w-80 p-4 border-4 text-center absolute inset-x-1/3 top-48">
                <p className="text-lg">Appointment making system focused on helping you obtain the best care for you needs.
                    We care just like Mama did for you!
                </p>
                <div className="object-center">
                    Please choose any of the following options for our services
                    <br></br>
                    <Link to="/make_appointment">
                        <button>Create an Appointment</button>
                    </Link>
                    <br></br>
                    <Link to="patient_profile">
                        <button>View your current Appointments</button>
                    </Link>
                </div>
            </main>
        )
    }
    

    return(
        <>
            <main className="container md:max-auto px-4 border-solid border-2 border-green-600 outline box-border h-64 w-80 p-4 border-4 text-center absolute inset-x-1/3 top-48">
                <h3 className="text-lg font-sans">Appointment making system focused on helping you obtain the best care for you needs.
                    We care just like Mama did for you!
                </h3>
                <br></br>
                <div className = "text-base italic">
                    Please log in to use our services or check our physicians
                </div>
            </main>
        </>
    );
}

export default Home