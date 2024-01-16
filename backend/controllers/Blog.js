const Blogs = require("../models/Blogs");
const User=require("../models/User")
exports.createBlog = async (req, res) => {
  try {
    const { title, description, category } = req.body;
    const {userId} = req.user.id;
    console.log("UserId",userId)
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
