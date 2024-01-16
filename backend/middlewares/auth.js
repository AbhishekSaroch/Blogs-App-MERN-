const jwt=require("jsonwebtoken")
const User=require("../models/User");
require("dotenv").config();

exports.auth=async(req,res)=>{
    try {
        const token =
        req.cookies.token ||
        req.body.token ||
        req.header("Authorization").replace("Bearer ", "");
        if(!token){
            return res.status(401).json({
                success:false,
                message:"Token Is Missing"
            })
        }
        try {
            const decode= jwt.verify(token,process.env.JWT_SECRET)
            console.log(decode)
            req.user=decode
        } catch (error) {
            console.log("Error From Auuth",error)
            return res.status(401).json({
                success:false,

                message:"Ye chal rha hai bro !!!!!!",
            })
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong while validating the token"
        })
    }
}