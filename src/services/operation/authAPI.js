import {  setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
import { toast } from "react-hot-toast"
const { SIGNUP_API, LOGIN_API } = endpoints;
export function signup(
 firstName,
  lastName,
  email,
  password,
  confirmPassword,
  navigate,
){
    return async (dispatch)=>{
        const toastId = toast.loading("Loading...")
        try {
            const response=await apiConnector("POST",SIGNUP_API,{
                firstName,
                lastName,
                email,
                password,
                confirmPassword,
            })

            console.log("SignUp API response...",response)
            if (!response.data.success) {
                throw new Error(response.data.message)
              }
              toast.success("Signup Successful")
              navigate("/login")
        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            console.error(error)
            toast.error(error)  
        }
        toast.dismiss(toastId)
    }
}

export function login(email,password,navigate){
    return async (dispatch) =>{
        const toastId = toast.loading("Loading...")
        try {
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
        })
              console.log("LOGIN API RESPONSE............", response)
              if (!response.data.success) {
                throw new Error(response.data.message)
              }
              toast.success("Login Successfull")
              dispatch(setToken(response.data.token))
              localStorage.setItem("user", JSON.stringify(response.data.user))
              localStorage.setItem("token", JSON.stringify(response.data.token))
              navigate("/")
        } catch (error) {
            toast.error("Login Failed");
            console.log("LOGIN API ERROR............", error)
        }
        toast.dismiss(toastId)
    }
}