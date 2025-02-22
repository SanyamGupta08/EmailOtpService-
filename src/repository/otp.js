const { Otp } = require("../models/index");
const { Op } = require("sequelize");
class OtpRepository {
  async createOtp(otpData) {
    try {
      const data = await Otp.create(otpData);
      return data;
    } catch (error) {
      return { error };
    }
  }
  async getOtpUser({ email }) {
    try {
      const data = Otp.findByPk(email);
      return data;
    } catch (e) {
      return { error: e };
    }
  }
  async updateOtp({ email, otp }) {
    try {
      const otpUser = await Otp.update(
        { otp: otp },
        { where: { email: email } }
      );
      return data;
    } catch (error) {
      return { error };
    }
  }
  async deleteOtp({ email }) {
    try {
      const data = await Otp.destroy({ where: { email } });
      return data;
    } catch (error) {
      return { error };
    }
  }
  async deleteExpiredOtp(expiredTime) {
    try {
      const recordsExpired = await Otp.destroy({
        where: {
          [Op.or]: [
            { createdAt: { [Op.lt]: expiredTime } },
            { updatedAt: { [Op.lt]: expiredTime } },
          ],
        },
      });
      console.log(recordsExpired);
      return { status: "success", message: "Record Deleted Sucessfully" };
    } catch (e) {
      return { error: e, message: "Error from OTP repository layer" };
    }
  }
}
module.exports = OtpRepository;
