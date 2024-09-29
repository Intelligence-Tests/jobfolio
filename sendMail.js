import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});

const mailOptions = {
    from: {
        name: 'JOBFOLIO',
        address: process.env.USER
    },
    to: email,
    subject: 'Email Verification',
    text: `Please verify your email by clicking on the following link: 
           http://localhost:5000/verify-email?token=${verificationToken}&email=${email}`,
};

const sendMail = async (transporter, mailOptions) => {
    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
    } catch (error) {
        console.error(error);
    }
}

sendMail(transporter, mailOptions);
