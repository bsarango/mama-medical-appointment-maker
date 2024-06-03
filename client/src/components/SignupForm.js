import React, {useState} from 'react'

function SignupForm(){

    const initialValues = {
        username : "",
        password : "",
        name : "",
        dob : "",
        address : "",
        phoneNumber : "", 
    };
{/*Don't forget to adjust phoneNumber key syntax when fetching to POST in backend */}

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
            <form className = "userForm">
                <label>Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {newPatientInfo.username}
                    onChange = {handleChange}
                />
                <label>Password</label>
                <input
                    type = "text"
                    name = "password"
                    value = {newPatientInfo.password}
                    onChange = {handleChange}
                />
                <label>Full Name</label>
                <input
                    type = "text"
                    name = "name"
                    value = {newPatientInfo.name}
                    onChange = {handleChange}
                />
                <label>Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {newPatientInfo.username}
                    onChange = {handleChange}
                />
                {/*Add input for DOB */}
                <label>Address</label>
                <input
                    type = "text"
                    name = "address"
                    value = {newPatientInfo.address}
                    onChange = {handleChange}
                />
                <label>Phone Number</label>
                <input
                    type = "text"
                    name = "phoneNumber"
                    value = {newPatientInfo.phoneNumber}
                    onChange = {handleChange}
                />
            </form>
        </div>
    );
};

export default SignupForm