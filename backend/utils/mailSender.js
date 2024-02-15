const nodeMailer=require("nodemailer");
require("dotenv").config();

const mailSender=async(email,title,body)=>{
    try {
        let transporter=nodeMailer.createTransport({
            host:process.env.MAIL_HOST,
            auth:{
                user:process.env.MAIL_USER,
                pass:process.env.MAIL_PASS,
            }
        })
        let info=await transporter.sendMail({
            from:"Bloggerly || Abhishek Sharma",
            to: `${email}`,
            subject: `${title}`,
            html: `${body}`,
        })
        console.log(info);
        return info;
    } catch (error) {
        console.log("ERROR IS ",error.message)
    }
}
module.exports=mailSender;