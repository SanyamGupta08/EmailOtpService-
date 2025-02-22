const {OTP_AUTHENTICATOR_PASSWORD}=require("../config/index")
const validateService = async (req, res, next) => {
  const { authenticatorPassword } = req.body;
  if (authenticatorPassword !== OTP_AUTHENTICATOR_PASSWORD) {
    return res
      .status(401)
      .json({ status: "failed", error: "service authentication failed" });
  }
  next();
};

module.exports = validateService;