import React, { useState } from "react";
import { login } from "../services/operation/authAPI";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    emaill: "",
    password: "",
  });
  const { emaill, password } = formData;
  const handleonchange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
    console.log("emaill->", emaill);
  console.log("password->", password)
  };
  const handleonsubmit = (e) => {
    e.preventDefault();
    dispatch(login({email:emaill}, password, navigate));
  };
  return (
<form
      onSubmit={handleonsubmit}
      className="h-[70vh] flex flex-col  justify-center items-center"
    >
      <h1 className='text-2xl text-white  font-medium bg-green-400 rounded-md px-5 py-1 text-center'>Welcome Back</h1>
      <label>E-Mail</label>
      <input
        type="text"
        name="emaill"
        value={emaill}
        onChange={handleonchange}
        className="border-2 w-[300px] px-5"
      />

      <label>Password</label>
      <input
        type="text"
        value={password}
        onChange={handleonchange}
        name="password"
        className="border-2 w-[300px] px-5"
      />
      <button
        className="bg-yellow-300 flex justify-center items-center mx-auto mt-5 px-5 py-1 rounded-sm font-semibold "
        type="submit"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
