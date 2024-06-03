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

    function handleChange(e){
        valueName = e.target.name;
        value = e.target.value;
        setNewPatientInfo({
            ...newPatientInfo, [valueName]:value
        });
    };

    function handleSubmit(e){
        e.preventDefault()
        console.log(newPatientInfo)
    }

    return(
        <div>
        </div>
    );
}

export default SignupForm