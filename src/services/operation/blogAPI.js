import { endpoints } from "../apis"
import {toast} from "react-hot-toast";
import { apiConnector } from "../apiConnector";
const {GET_BLOGS_API,CREATE_BLOGS_API,DELETE_BLOG} =endpoints

export const getAllBlogs = async () => {
     const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_BLOGS_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Blogs")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_Blogs_API API ERROR............", error)
      toast.error(error.message)
    }
     toast.dismiss(toastId)
    return result
  }
export const createBlogAPI = async (userId,title,category,description,image) => {
     const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("POST", CREATE_BLOGS_API,{
        userId,
        title,
        category,
        description,
        image
      })
      console.log("BLOGAPICREATE API RESPONSE............", response)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
     
    } catch (error) {
      console.log("CREATE_ALL_Blogs_API API ERROR............", error)
      toast.error(error.message)
    }
     toast.dismiss(toastId)
    return result
  }


export const getUserAllDetails = async () => {
   toast.loading("Loading...")
   let result = []
   try {
     const response = await apiConnector("GET", GET_BLOGS_API)
     if (!response?.data?.success) {
       throw new Error("Could Not Fetch User All Data")
     }
     toast.success("Fetched My Blogs")
     result = response?.data?.data
   } catch (error) {
    console.log("user details API ERROR............", error)
     toast.error(error.message)
   }
   
   return result
 }

export const deleteBlogs = async () => {
   let toastid=toast.loading("Loading...")
   let result = []
   try {
     const response = await apiConnector("DELETE",DELETE_BLOG)
     if (!response?.data?.success) {
       throw new Error("Could Not Fetch User All Data")
     }
     toast.success("Deleted Successfully")
     
   } catch (error) {
    console.log("user details API ERROR............", error)
     toast.error(error.message)
   }
   toast.dismiss(toastid)
   return result
 }

