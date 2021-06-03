const axios = require("axios");
const { transaction } = require("../models");

class TransactionController {
  // Get All My Transactions
  async getAll(req, res, next) {
    try {
      let response;
      let data;
      // Find all data
      if (req.user.role.includes("admin")) {
        data = await transaction.find();
      } else {
        data = await transaction.find({ user: req.user.id });
      }

      // If no data
      if (data.length === 0) {
        return next({ statusCode: 404, message: "Transaction Not Found" });
      }

      // Get user
      for (let index = 0; index < data.length; index++) {
        response = await axios.get(
          `${process.env.API_GATEWAY_URL}/auth/profile/${data[index].user}`
        );
        data[index]._doc.user = response.data.data;
      }

      // If success
      return res.status(200).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Get One
  async getOne(req, res) {
    try {
      let data;
      // Find one data

      if (req.user.role.includes("admin")) {
        data = await transaction.findOne({ _id: req.params.id });
      } else {
        data = await transaction.findOne({
          _id: req.params.id,
          user: req.user.id,
        });
      }

      // If data not found
      if (!data) {
        return res.status(404).json({
          message: "Transaction Not Found",
        });
      }

      let response = await axios.get(
        `${process.env.API_GATEWAY_URL}/auth/profile/${data.user}`
      );
      data._doc.user = response.data.data;

      // If success
      return res.status(200).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Create transaction
  async create(req, res, next) {
    try {
      // Create data
      let data = await transaction.create(req.body);

      // If success
      return res.status(201).json({ data });
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = new TransactionController();
