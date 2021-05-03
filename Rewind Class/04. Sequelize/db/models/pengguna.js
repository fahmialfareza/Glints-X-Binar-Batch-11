"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class pengguna extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pengguna.init(
    {
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("password", bcrypt.hashSync(value, 10));
        },
      },
    },
    {
      sequelize,
      modelName: "pengguna",
    }
  );
  return pengguna;
};
