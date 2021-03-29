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

      if (data.length === 0) {
        return res.status(404).json({
          message: "Data Not Found",
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

  // Get One transaksi
  getOne(req, res) {
    // Promise
    transaksi
      .findOne({
        where: { id: `${req.params.id}` },
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
            message: "Data Not Found",
          });
        }

        return res.status(200).json({
          message: "Success",
          data: data,
        });
      })
      .catch((e) => {
        return res.status(500).json({
          message: "Internal Server Error",
          error: e,
        });
      });
  }

  async create(req, res) {
    try {
      // Find price of barang
      let findData = await Promise.all([
        barang.findOne({
          where: { id: req.body.id_barang },
        }),
        pelanggan.findOne({
          where: { id: req.body.id_pelanggan },
        }),
      ]);

      if (!findData[0] || !findData[1]) {
        return res.status(404).json({
          message: "Barang or Pelanggan Not Found",
        });
      }

      // Find total
      let price = findData[0].harga;
      let total = eval(price * req.body.jumlah);

      let createData = await transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total,
      });

      // Find the new transaksi
      let data = await transaksi.findOne({
        where: { id: createData.id },
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
