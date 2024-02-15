import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Logout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    toast.success("Logout");
    navigate("/");
    window.location.reload();
  };
  return <button onClick={logout}>Logout</button>;
};

export default Logout;
