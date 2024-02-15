const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "blogs",
    },
  ],
});
async function sendLoginMail(email) {
  try {
    const mailResponse = await mailSender(
      email,
      "Login Successful on Bloggerly"
    );
    console.log("E-mail sent successfully", mailResponse.response);
  } catch (error) {
    console.log("Error Occored while sending mail", error);
    throw error;
  }
}

userSchema.pre("save", async function (next) {
    console.log("New document saved to database");
  if (this.isNew) {
    await sendVerificationEmail(this.email);
  }
  next();
});

module.exports = mongoose.model("user", userSchema);
