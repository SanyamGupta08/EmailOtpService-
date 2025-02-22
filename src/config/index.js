const dotenv = require("dotenv")
dotenv.config();
console.log(process.env.EMAIL, process.env.PASSWORD);
module.exports = {
  PORT: process.env.PORT,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  OTP_AUTHENTICATOR_PASSWORD: process.env.OTP_AUTHENTICATOR_PASSWORD,
  SALT_ROUND: process.env.SALT_ROUND,
};