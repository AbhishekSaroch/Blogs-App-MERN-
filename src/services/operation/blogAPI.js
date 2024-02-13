import { endpoints } from "../apis"
import { apiConnector } from "../apiConnector";
const {GET_BLOGS_API} =endpoints


export const getAllBlogs = async () => {
    // const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GET_BLOGS_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Blogs")
      }
      result = response?.data?.data
    } catch (error) {
      console.log("GET_ALL_Blogs_API API ERROR............", error)
    //   toast.error(error.message)
    }
    // toast.dismiss(toastId)
    return result
  }