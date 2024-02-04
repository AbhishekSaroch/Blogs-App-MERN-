const Blogs = require("../models/Blogs");
const User=require("../models/User")
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const {userId} = req.body;
    console.log("user",userId)
    if (!title || !description || !category) {
      return res.status(401).json({
        success: false,
        message: "All Fields are required",
      });
    }
    const newBlog = await Blogs.create({
      title,
      description,
      category,
    });
    await User.findByIdAndUpdate(
      userId,
      { $push: { blogs: newBlog._id } },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      data: newBlog,
      message: "Created Successfully!!",
    });
  } catch (error) {
    console.log(error)
    return res.status(401).json({
      success: false,
      message: "All Fields are required",
    });
  }
};
exports.getAllBlogs=async(req,res)=>{
    try {
      const allBlogs=await Blogs.find({},
        {
          title:true,
          description:true,
          image:true,
          category:true
        }
        )
        return res.status(200).json({
          success:true,
          message:"All Blogs Feteched",
          allBlogs
        })
    } catch (error) {
      console.log("Error is ----->",error)
      return res.status(500).json({
        success:false,
        message:"Not Able to fetch",
        allBlogs
      })
    }
}
exports.getBlogById=async(req,res)=>{
  try {
    const {blogid}=req.body;
    const Blog=await Blogs.findById({
      _id:blogid
    })
    return res.status(200).json({
      message:"Successfully Fetched The Blog According to id",
      success:true,
      Blog
    })
  } catch (error) {
    console.log("Error----------->",error)
    return res.status(500).json({
      message:"Not Working !!",
      success:false
    })
  }
}
exports.deleteBlogs=async(req,res)=>{
  try {
    const {blogid}=req.body;
    const Blog=await Blogs.findByIdAndDelete({
      _id:blogid
    })
    return res.status(200).json({
      message:"Successfully Deleted The Course",
      success:true
    })
  } catch (error) {
    console.log("Error----------->",error)
    return res.status(500).json({
      message:"Not Working !!",
      success:false
    })
  }
}
exports.updateBlog=async(req,res)=>{
  try {
    const {blogid}=req.body
    const { title, description, category,image } = req.body;

    const blog=await Blogs.findById({
      _id:blogid
    })
    if (title) blog.title = title;
    if (description) blog.description = description;
    if (image) blog.image = image;
    if (category) blog.category = category;

    await blog.save();

    // Return the updated blog as a response
    res.json(blog);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Server Error' });
  } 
  }


