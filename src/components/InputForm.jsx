import React, { useState } from 'react'

const InputFromMethods = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const [firstnameError, setFirstnameError] = useState(true)
    const [lastnameError, setLastnameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmError, setConfirmError] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!firstnameError && !lastnameError && !emailError && !passwordError &&!confirmError){
            const newUser = {firstname, lastname, email, password, confirm}
            console.log(newUser)
            setHasBeenSubmitted(true)
        } else {
            alert("error")
        }
    }

    const handleFirstName =(f) =>{
        setFirstname(f.target.value)
        if(f.target.value.length < 3 && f.target.value.length > 0){
            setFirstnameError("First Name must be at least 3 characters")
        } else {
            setFirstnameError("")
        }
    }
    
    const handleLastName =(f) =>{
        setLastname(f.target.value)
        if(f.target.value.length < 3 && f.target.value.length > 0){
            setLastnameError("Last Name must be at least 3 characters")
        } else {
            setLastnameError("")
        }
    }

    const handleEmail = (e) =>{
        setEmail(e.target.value)
        if(e.target.value.length < 2 && e.target.value.length > 0){
            setEmailError("Email must be at least 2 characters")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (p) =>{
        setPassword(p.target.value)
        if(p.target.value.length < 8){
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirm = (p) =>{
        setConfirm(p.target.value)
        if(p.target.value !== password){
            setConfirmError("Passwords must match")
        } else {
            setConfirmError("")
        }
    }
        return (
            <div>
                {
                    hasBeenSubmitted?
                    <h1>Welcome {firstname} {lastname}!</h1> :
                    <h1>Please Create an Account</h1>
                }
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>First Name: </label>
                        <input type="text" name="firstname" onChange={handleFirstName} value={firstname}/>
                            <p> {firstnameError} </p>
                    </div>
                    <div>
                        <label>Last Name: </label>
                        <input type="text" name="lastname" onChange={handleLastName} value={lastname}/>
                            <p> {lastnameError} </p>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="text" name="email" onChange={handleEmail} value={email}/>
                            <p> {emailError} </p>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" name="password" onChange={handlePassword} value={password}/>
                            <p> {passwordError} </p>
                    </div>
                    <div>
                        <label>Confirm Password: </label>
                        <input type="password" name="confirm" onChange={handleConfirm} value={confirm}/>
                            <p> {confirmError} </p>
                    </div>
                    <button disabled={confirmError || passwordError|| firstnameError || lastnameError || emailError}>Submit</button>
                </form>
            </div>
        )
    
}

export default InputFromMethods



