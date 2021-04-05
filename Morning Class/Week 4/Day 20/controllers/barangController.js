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
        error: e,
      });
    }
  }

  // Create barang
  async create(req, res) {
    try {
      let createdData = await barang.create({
        nama: req.body.nama,
        harga: req.body.harga,
        id_pemasok: req.body.id_pemasok,
        image: req.body.image ? req.body.image : null,
      });

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
        error: e,
      });
    }
  }
}

module.exports = new BarangController();
