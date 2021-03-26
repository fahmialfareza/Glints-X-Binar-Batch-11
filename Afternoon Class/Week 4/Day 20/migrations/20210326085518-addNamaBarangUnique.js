"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint("barang", {
      fields: ["nama"],
      type: "unique",
      name: "custom_unique_nama",
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
