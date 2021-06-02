const axios = require("axios");
const { good } = require("../models"); // Import all models

class GoodController {
  // Get all
  async getAll(req, res, next) {
    try {
      // If axios get 200/201/etc
      let data = await good.findAll();

      return res.status(200).json({ data });
    } catch (e) {
      return next(e);
    }
  }

  // Create good
  async create(req, res, next) {
    try {
      let createdData = await good.create(req.body);

      let data = await good.findOne({
        where: {
          id: createdData.id,
        },
      });

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return next(e);
    }
  }
}

module.exports = new GoodController();
