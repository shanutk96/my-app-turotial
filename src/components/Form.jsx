import React from 'react'
import { useState } from 'react'
import '../App.css';


function Form() {

  const [formData, setFormdata] = useState({
    firstName:'',
    lastName: '',
    email:'',
    password:''
  
  })

  const handleInputChange = (event)=>{
    const {name,value} = event.target // event.target provides access to the name and value of the input field that triggered the event
  //const name = event.target.name;
  //const value = event.target.value;
    setFormdata((prevData)=>({...prevData,[name]:value})) //(prevData) is the previous state of the formdata object.
                                                         //[name]: value: This syntax is a 'computed property nam'e in JavaScript. 
  }  

  const handleSubmit = (event)=>{
    event.preventDefault() //to prevent refresh
    console.log("Output is", formData)
  }

  return (
    <div class="signup-card">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        {/* Firstname */}
        <div class="form-group">
          <label for="firstame">First Name:</label>
          <input type="text" id="firstName" placeholder="Enter your first name" name='firstName' value={formData.firstName} onChange={(event)=>handleInputChange(event)}/>
        </div>
        {/* lastname */}
        <div class="form-group">
          <label for="lastname">Last Name:</label>
          <input type="text" id="lastName" placeholder="Enter your last name" name='lastName' value={formData.lastName} onChange={(event)=>handleInputChange(event)} />
        </div>
        {/* email */}
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" placeholder="Enter your email" name='email' value={formData.email} onChange={(event)=>handleInputChange(event)}  />
        </div>
        {/* password */}
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="Enter your password" name='password' value={formData.password} onChange={(event)=>handleInputChange(event)} />
        </div>

        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
  )
}

export default Form