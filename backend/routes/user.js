const express=require("express");
const router=express.Router();

const {signup,login}=require("../controllers/Auth");
const {getUserBlogs}=require("../controllers/User")
router.post("/signup",signup);
router.post("/login",login);
router.get("/getUserBlogs",getUserBlogs)

module.exports=router;