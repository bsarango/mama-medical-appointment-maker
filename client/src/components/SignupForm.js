import React, {useState} from 'react'

function SignupForm(){

    const initialValues = {
        username : "",
        password : "",
        name : "",
        dob : "",
        address : "",
        phone_number : "",
    };

    const [newPatientInfo, setNewPatientInfo] = useState(initialValues)

    return(
        <div>
        </div>
    );
}

export default SignupForm