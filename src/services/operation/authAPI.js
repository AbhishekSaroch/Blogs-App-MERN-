import {  setToken } from "../../slices/authSlice";
import { apiConnector } from "../apiConnector";
import { endpoints } from "../apis";
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
              navigate("/login")
        } catch (error) {
            console.log("SIGNUP API ERROR............", error)
            console.error(error)
            console.log(error)
            
        }
    }
}

export function login(email,password,navigate){
    return async (dispatch) =>{
        try {
            
            console.log("email ye login ki ->",email)
            console.log("pass ye login ki ->",password)
            const response = await apiConnector("POST", LOGIN_API, {
                email,
                password,
        })
              console.log("LOGIN API RESPONSE............", response)

              if (!response.data.success) {
                throw new Error(response.data.message)
              }
              dispatch(setToken(response.data.token))
              localStorage.setItem("token", JSON.stringify(response.data.token))
            //   const userImage = response.data?.user?.image
            //   ? response.data.user.image
            //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
              localStorage.setItem("token", JSON.stringify(response.data.token))
              navigate("/home")
        } catch (error) {
            console.log("LOGIN API ERROR............", error)
        }
    }
}