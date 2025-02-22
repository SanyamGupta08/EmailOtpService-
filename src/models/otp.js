"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");
const SALT_ROUND=require("../config/index")
module.exports = (sequelize, DataTypes) => {
  class Otp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Otp.init(
    {
      email: {
        primaryKey: true,
        validate: {
          isEmail: true,
        },
        type: DataTypes.STRING,
      },
      otp: {
        allowNull: false,
        validate: {
          isNumeric: true,
        },
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Otp",
      hooks: {
        beforeCreate: async (userOtp, options) => {
          const salt = await bcrypt.genSalt(Number.parseInt(SALT_ROUND));
          console.log(userOtp)
          const hashOtp= await bcrypt.hash(userOtp.otp, salt);
          userOtp.otp=hashOtp;
        },
      },
    }
  );
  return Otp;
};
