const { transaksi, barang, pelanggan, pemasok } = require("../models"); // Import all models
require("../utils/associations"); // Import table relationship

class TransaksiController {
  // Get all transaksi data
  async getAll(req, res) {
    try {
      let data = await transaksi.findAll({
        // find all data of Transaksi table
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama"], // just this attrubute from Barang that showed
            include: [
              // Include is join
              { model: pemasok, attributes: ["nama"] },
            ],
          },
          {
            model: pelanggan,
            attributes: ["nama"], // just this attrubute from Pelanggan that showed
          },
        ],
      });

      return res.status(200).json({
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

module.exports = new TransaksiController();
