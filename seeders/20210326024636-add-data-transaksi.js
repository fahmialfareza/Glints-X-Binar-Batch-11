"use strict";
const { v4: uuidv4 } = require("uuid");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("transaksi", [
      {
        id: uuidv4(),
        id_barang: 1,
        id_pelanggan: 1,
        jumlah: 1,
        total: 14500,
        expiredPayment: new Date(Date.now() + 2 * 60 * 1000),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        id_barang: 2,
        id_pelanggan: 2,
        jumlah: 2,
        total: 49200,
        expiredPayment: new Date(Date.now() + 2 * 60 * 1000),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        id_barang: 3,
        id_pelanggan: 3,
        jumlah: 3,
        total: 133500,
        expiredPayment: new Date(Date.now() + 2 * 60 * 1000),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("transaksi", null, {});
  },
};
