import React, {useState, useEffect} from 'react'


function Home(){

    const textToDisplay = ()=>{
        if(loggedIn){
        const loggedInText = (
        <>
            <h3>
            Welcome {patient.name}. Please feel free to check any physicians, make an appointment, or manage any existing ones.
            </h3>
            <Appointments appointments = {patient.appointments}/>
        </>
        )
        return loggedInText
        };
        return <h3>Welcome to the online app. Please log in to make an appointment or manage appointments. You can create an account if you are new to our services.</h3>
    };

    return(
        <>
            <header>MaMa by My Medical Group</header>
            <main>
                <h3>Appointment making system focused on helping you obtain the best care for you needs.
                    We care just like Mama did for you!
                </h3>
                <div>
                    {textToDisplay}
                </div>
            </main>
        </>
    );
}

export default Home