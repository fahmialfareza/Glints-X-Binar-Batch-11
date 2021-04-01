const { barang, pelanggan, pemasok, transaksi } = require("../models");

class TransaksiController {
  // Get all data
  async getAll(req, res) {
    try {
      // Get all transaksi data
      let data = await transaksi.find();

      // If no data
      if (data.length === 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
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
