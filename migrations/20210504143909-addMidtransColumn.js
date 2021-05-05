"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("transaksi", "status", {
      allowNull: false,
      defaultValue: "pending",
      type: Sequelize.ENUM("pending", "failed", "success"),
    });
    await queryInterface.addColumn("transaksi", "expiredPayment", {
      allowNull: false,
      type: Sequelize.DATE,
    });
    await queryInterface.addColumn("transaksi", "token", {
      allowNull: true,
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("transaksi", "redirect_url", {
      allowNull: true,
      type: Sequelize.STRING,
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  },
};
