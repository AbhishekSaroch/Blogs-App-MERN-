let BASE_URL=process.env.REACT_APP_BASE_URL
let REACT_APP_BASE_URL="http://localhost:5000/api/v1"
console.log("BASE URL is  ",BASE_URL)
export const endpoints={
    SIGNUP_API:REACT_APP_BASE_URL+"/signup",
    LOGIN_API:REACT_APP_BASE_URL+"/login",
    GET_BLOGS_API:REACT_APP_BASE_URL+"/getAllBlogs"
}