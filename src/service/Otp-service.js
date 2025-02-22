const OtpRepository = require("../repository/otp");
const otpRepository = new OtpRepository();
const sendOtp = require("../utils/gmail_service");
const bcrypt=require("bcrypt")

class OtpService {
  async generateOtp() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async validateOtp(userData) {
    try {
       console.log(userData);
      const response = await this.getUser(userData);
      console.log(response?.userRepoData?.otp);
      const result =await  bcrypt.compare(userData?.otp, response?.userRepoData?.otp);
     console.log(result)
      if (result) {
        return { otpStatus: "Successful" };
      } else {
        return { otpStatus: "Failed" };
      }
    } catch (e) {
      return {
        error: e,
        message: "Some error occurs in Otp-Service",
        origin: "otpService",
      };
    }
  }

  async createOtp(userData) {
    try {
      const response = await this.getUser(userData);
      if (response.status === "successful") {
        const otp = await this.generateOtp();

        if (!response.exist) {
          const data = await otpRepository.createOtp({ ...userData, otp: otp });
          const sendEmailResponse = await sendOtp({ ...userData, otp: otp });
        } else {
          const data = await otpRepository.updateOtp({ ...userData, otp: otp });
          const sendEmailResponse = await sendOtp({ ...userData, otp: otp });
        }
      } else {
        return response;
      }
      return { status: "successfull" };
    } catch (e) {
      return { error: e };
    }
  }
  async getUser(userData) {
    try {
      const response = await otpRepository.getOtpUser(userData);
     
      if (!response) {
        return { status: "successful", exist: false };
      } else {
        return { status: "successful", exist: true, userRepoData: response };
      }
    } catch (e) {
      return { status: "failed", error: "Otp getUser Service Error" };
    }
  }

  async deleteOtp(userData) {
    try {
      const response = await otpRepository.deleteOtp(userData);
      return { status: "successful" };
    } catch (error) {
      return {
        error: e,
        message: "Some error in Delete Otp Service",
        origin: "Otp Service",
      };
    }
  }

  async deleteExpiryOtp() {
    const expiredTime = new Date(Date.now() - 60 * 60 * 1000);

    const recordsExpired = await otpRepository.deleteExpiredOtp(expiredTime);

    console.log(recordsExpired);
  }
}

module.exports = OtpService;
