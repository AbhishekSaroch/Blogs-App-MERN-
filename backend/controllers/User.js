const User=require("../models/User")
const Blogs=require("../models/Blogs")

exports.getUserBlogs = async (req, res) => {
	try {
		const {userId} = req.query;
		if(!userId){
			return res.status(401).json({
				success:false,
				message:"Provide the userid"
			})
		}
		const userDetails = await User.findById(userId)
			.populate("blogs")
			.exec();
		console.log(userDetails);
		res.status(200).json({
			success: true,
			message: "User Data with blogs fetched successfully",
			userAllDetails: userDetails,
			data: userDetails.blogs,
		});
	} catch (error) {
		console.log("Error is",error)
		return res.status(500).json({
			success: false,
			message: error.message,
		});
	}
};