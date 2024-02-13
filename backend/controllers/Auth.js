const User = require("../models/User");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    // Takes all fields
    const { firstName, lastName, password, email, confirmPassword } = req.body;
    if (!firstName || !lastName || !password || !email || !confirmPassword) {
      return res.status(401).json({
        message: "Please Fill All The Fields!!",
        success: false,
      });
    }
    // Validatiom
    if (confirmPassword !== password) {
      return res.status(401).json({
        success: false,
        message: "Passwords do not match",
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("Email", email);
      return res.status(401).json({
        success: false,
        message: "User already Exists",
      });
    }
    // Password Hash
    const hashedPassword = await bcrypt.hash(password, 6);
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

exports.login = async (req, res) => {
  try {
    // get data
    // validate data
    // user check exists or not
    // generate token and check password
    // create cookie
    // return response
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please Fill All the details",
        password,
        email,
      });
    }
    console.log("EMAIL YE AII",email)
    const user = await User.findOne(email);
    if (!user) {
      return res.status(401).json({
        success: true,
        message: "User Is Not Registered,Please signup",
      });
    }
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        accountType: user.accountType,
        id: user._id,
      };
      const token = await jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      user.token = token;
      user.password = undefined;
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      return res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "Logged In successfully",
      });
    } else {
      return res.status(401).json({
        success: true,
        message: "Wrong Password",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Login Failed ,Please try again",
    });
  }
};