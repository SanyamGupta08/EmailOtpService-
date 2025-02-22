const nodemailer = require('nodemailer');
const {EMAIL,PASSWORD} =require("../config/index")
// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD
  }
});

// Function to generate a random OTP

// Function to send OTP email
const sendOTP = async({email,otp}) => {

  // Mail options
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is: ${otp}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return otp; // Store this OTP for validation
  } catch (error) {
    console.error('Error sending email:', error);
    return null;
  }
};

module.exports = sendOTP;


