const cron = require("node-cron");
const OtpService = require('../service/Otp-service')
const otpService = new OtpService();
const scheduleJob = () => {
    cron.schedule("0 */1 * * *", () => {
        otpService.deleteExpiryOtp();
    });
}
module.exports = scheduleJob;