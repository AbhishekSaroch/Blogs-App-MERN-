import React, { useState } from "react";
import toast from "react-hot-toast";
import { login } from "../services/operation/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email }, password, navigate));
  };

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleOnSubmit}
        className="h-screen flex flex-col justify-center items-center bg-gray-100"
      >
        <h1 className="text-3xl text-center text-gray-800 mb-6 font-semibold">
          Welcome Back
        </h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            E-Mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleOnChange}
            className="border-2 rounded-md w-64 py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleOnChange}
            className="border-2 rounded-md w-64 py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
