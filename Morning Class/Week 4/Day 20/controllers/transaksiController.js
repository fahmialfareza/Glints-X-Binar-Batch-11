const { transaksi } = require("../models");

class TransaksiController {
  async getAll(req, res) {
    try {
      let data = await transaksi.findAll({});

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
