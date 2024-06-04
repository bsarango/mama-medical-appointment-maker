import React, {useState} from 'react'

function SignupForm(){

    // const initialValues = {
    //     username : "",
    //     password : "",
    //     name : "",
    //     dob : "",
    //     address : "",
    //     phoneNumber : "", 
    // };
{/*Don't forget to adjust phoneNumber key syntax when fetching to POST in backend */}

    // const [newPatientInfo, setNewPatientInfo] = useState(initialValues)

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")

    function handleSubmit(e){
        const formValues = {
            username:username,
            password:password,
            name:name,
            address:address,
            phoneNumber:phoneNumber
        }
        e.preventDefault()
        console.log(formValues)
    }

    return(
        <div>
            <form className = "userForm" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    type = "text"
                    name = "username"
                    value = {username}
                    onChange = {e=>setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type = "text"
                    name = "password"
                    value = {password}
                    onChange = {e=>setPassword(e.target.value)}
                />
                <label htmlFor='name'>Full Name</label>
                <input
                    type = "text"
                    name = "name"
                    value = {name}
                    onChange = {e=>setName(e.target.value)}
                />
                {/*Add input for DOB */}
                <label htmlFor='address'>Address</label>
                <input
                    type = "text"
                    name = "address"
                    value = {address}
                    onChange = {e=>setAddress(e.target.value)}
                />
                <label htmlFor='phoneNumber'>Phone Number</label>
                <input
                    type = "text"
                    name = "phoneNumber"
                    value = {phoneNumber}
                    onChange = {e=>setPhoneNumber(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default SignupForm