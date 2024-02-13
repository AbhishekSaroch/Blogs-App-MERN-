import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {signup} from "../services/operation/authAPI"
const Signup = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { firstName, lastName, email, password, confirmPassword } = formData;
  const handleOnChange = (e) => {
    setFormData((prevData)=>({
      ...prevData,
      [e.target.name]:e.target.value,
    }))
  };
  console.log("email",email)
  console.log("First Name",firstName)
  const handleOnSubmit = (e) => {
    console.log("HO GAYA SUBMIT")
    e.preventDefault()
    dispatch(signup(firstName,lastName,email,password,confirmPassword,navigate))
    console.log("AAGYA")
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <label>First Name</label>
      <div>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleOnChange}
          placeholder="Enter First Name Here"
          className='border px-2'
        />
      </div>
      <label>Last Name</label>
      <div>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleOnChange}
          placeholder="Enter last Name Here"
          className='border px-2'
        />
      </div>
      <label>E-Mail</label>
      <div>
        <input
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          placeholder="Enter email Name Here"
          className='border px-2'
        />
      </div>
      <label>Password</label>
      <div>
        <input
          type="text"
          name="password"
          value={password}
          onChange={handleOnChange}
          placeholder="Enter email Name Here"
          className='border px-2'
        />
      </div>
      <label>Confirm Password</label>
      <div>
        <input
          type="text"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          placeholder="Enter email Name Here"
          className='border px-2'
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Signup;
