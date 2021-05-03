const { barang, pelanggan, pemasok } = require("../models"); // Import all models

class BarangController {
  // Get all
  async getAll(req, res) {
    try {
      let data = await barang.findAll({
        attributes: ["id", "harga", "image", "createdAt", "updatedAt"],
        include: [
          // Include is join
          { model: pemasok, attributes: ["nama"] },
        ],
      });

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Create barang
  async create(req, res) {
    try {
      let createdData = await barang.create(req.body);

      let data = await barang.findOne({
        where: {
          id: createdData.id,
        },
        attributes: ["id", "harga", "image", "createdAt", "updatedAt"],
        include: [
          // Include is join
          { model: pemasok, attributes: ["nama"] },
        ],
      });

      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
}

module.exports = new BarangController();
