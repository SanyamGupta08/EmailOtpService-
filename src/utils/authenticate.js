const { AUTHENTICATION_PASSWORD } = require("../config/index")
const authenticate = async (req, res, next)=>{
    const { USER_AUTHENTICATION_PASSWORD } = req.body;
    if (AUTHENTICATION_PASSWORD === USER_AUTHENTICATION_PASSWORD) {
        next();
    }
    return res.status(400).json({ status: "Failed", error: "user is not Authentic" });
}