const axios = require("axios");
const { good } = require("../models"); // Import all models

class GoodController {
  // Get all
  async getAll(req, res, next) {
    try {
      var config = {
        method: "get",
        url: `${process.env.API_GATEWAY_URL}/auth/isAdmin`,
        headers: {
          Authorization: req.headers.authorization || "",
        },
      };

      await axios(config);

      // If axios get 200/201/etc
      let data = await good.findAll({
        attributes: ["id", "price", "image", "createdAt", "updatedAt"],
      });

      return res.status(200).json({ data });
    } catch (e) {
      if (e.response) {
        return next({
          message: e.response.data.message,
          statusCode: e.response.status,
        });
      }

      return next(e);
    }
  }

  // Create barang
  //   async create(req, res, next) {
  //     try {
  //       let createdData = await barang.create(req.body);

  //       let data = await barang.findOne({
  //         where: {
  //           id: createdData.id,
  //         },
  //         attributes: ["id", "harga", "image", "createdAt", "updatedAt"],
  //         include: [
  //           // Include is join
  //           { model: pemasok, attributes: ["nama"] },
  //         ],
  //       });

  //       return res.status(201).json({
  //         message: "Success",
  //         data,
  //       });
  //     } catch (e) {
  //       return next(e);
  //     }
  //   }
}

module.exports = new GoodController();
