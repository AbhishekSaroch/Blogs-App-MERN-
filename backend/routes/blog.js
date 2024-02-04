const express=require("express")
const router=express.Router()

const {createBlog,getAllBlogs,deleteBlogs,getBlogById,updateBlog}=require("../controllers/Blog")

router.post("/createBlog",createBlog);
router.get("/getAllBlogs",getAllBlogs);
router.delete("/deleteBlog",deleteBlogs);
router.get("/getBlogById",getBlogById)
router.put("/updateBlog",updateBlog)
module.exports = router