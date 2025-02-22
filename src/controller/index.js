const { OtpService } = require("../service/index");
const otpService = new OtpService();

const createOtp = async (req, res) => {
  const userData = req.body;
  const response = await otpService.createOtp(userData);
  res.send(response);
};
const validateOtp = async (req, res) => {
  const userData = req.body;
    const response = await otpService.validateOtp(userData);
    res.send(response);
};
const deleteOtp = async (req, res) => {
  const userData = req.body;
    const response = await otpService.deleteOtp(userData);
    res.send(response)
};
module.exports = { createOtp ,deleteOtp,validateOtp};
