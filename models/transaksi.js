"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transaksi extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Transaksi.init(
    {
      id_barang: DataTypes.INTEGER,
      id_pelanggan: DataTypes.INTEGER,
      jumlah: DataTypes.INTEGER,
      total: DataTypes.DECIMAL,
      status: DataTypes.ENUM("pending", "failed", "success"),
      expiredPayment: DataTypes.DATE,
      token: DataTypes.STRING,
      redirect_url: DataTypes.STRING,
    },
    {
      sequelize,
      paranoid: true, // Activate soft delete
      timestamps: true, // timestamps
      freezeTableName: true, // because we use Indonesian
      modelName: "transaksi",
    }
  );
  return Transaksi;
};
