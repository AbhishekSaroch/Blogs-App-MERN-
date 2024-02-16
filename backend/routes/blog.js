const express = require('express');
const router = express.Router();
const multer = require('multer');
const { createBlog,getAllBlogs,deleteBlogs,getBlogById,updateBlog } = require('../controllers/Blog');

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/routes/uploads'); // Specify the destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Specify the file name for uploaded files
  },
});

const upload = multer({ storage: storage });

// Route for creating a blog with file upload
router.post('/createBlog' ,createBlog);
router.get("/getAllBlogs",getAllBlogs);
router.delete("/deleteBlog",deleteBlogs);
router.get("/getBlogById",getBlogById)
router.put("/updateBlog",updateBlog)
module.exports = router