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

      // If data is nothing
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
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Get One transaksi
  getOne(req, res) {
    // Promise
    // FindOne transaksi
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
        // If transaksi not found
        if (!data) {
          return res.status(404).json({
            message: "Transaksi Not Found",
          });
        }

        // If success
        return res.status(200).json({
          message: "Success",
          data: data,
        });
      })
      .catch((e) => {
        // If error
        return res.status(500).json({
          message: "Internal Server Error",
          error: e.message,
        });
      });
  }

  // Create Data
  async create(req, res) {
    try {
      // Will create data
      let createdData = await transaksi.create({
        id_barang: req.body.id_barang,
        id_pelanggan: req.body.id_pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      // Find the new transaksi
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

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Update data
  async update(req, res) {
    let update = {
      id_barang: req.body.id_barang,
      id_pelanggan: req.body.id_pelanggan,
      jumlah: req.body.jumlah,
      total: req.body.total,
    };

    try {
      // Transaksi table update data
      let updatedData = await transaksi.update(update, {
        where: {
          id: req.params.id,
        },
      });

      // Find the updated transaksi
      let data = await transaksi.findOne({
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
      });

      // If success
      return res.status(201).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      // Delete data
      let data = await transaksi.destroy({ where: { id: req.params.id } });

      // If data deleted is null
      if (!data) {
        return res.status(404).json({
          message: "Transaksi Not Found",
        });
      }

      // If success
      return res.status(200).json({
        message: "Success delete transaksi",
      });
    } catch (e) {
      // If error
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
}

module.exports = new TransaksiController();
