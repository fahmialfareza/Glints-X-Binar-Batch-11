const { transaksi, barang, pelanggan, pemasok } = require("../models"); // Import all models

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
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
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

      if (!data.length > 0) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

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

  getOne(req, res) {
    // Promise
    transaksi
      .findOne({
        where: { id: req.params.id },
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
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
      })
      .then((data) => {
        if (!data) {
          return res.status(404).json({
            message: "Transaksi Not Found",
          });
        }

        return res.status(200).json({
          message: "Success",
          data,
        });
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      });
  }

  async create(req, res) {
    try {
      // Find barang and pelanggan
      let findData = await Promise.all([
        barang.findOne({ where: { id: req.body.id_barang } }),
        pelanggan.findOne({ where: { id: req.body.id_pelanggan } }),
      ]);

      let errors = [];

      // If barang not found
      if (!findData[0]) {
        errors.push("Barang Not Found");
      }

      // If pelanggan not found
      if (!findData[1]) {
        errors.push("Pelanggan Not Found");
      }

      // If errors.length > 0
      if (errors.length > 0) {
        return res.status(404).json({
          message: errors.join(", "),
        });
      }

      let price = findData[0].harga;
      let total = eval(price * req.body.jumlah);

      let createdData = await transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total,
      });

      let data = await transaksi.findOne({
        where: { id: createdData.id },
        attributes: ["id", "jumlah", "total", ["createdAt", "waktu"]], // just these attributes that showed
        include: [
          // Include is join
          {
            model: barang,
            attributes: ["nama", "harga"], // just this attrubute from Barang that showed
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

module.exports = new TransaksiController();
