const { ObjectId } = require("mongodb"); // Import ObjectId
const connection = require("../models");
const dbConnection = connection.db("penjualan_afternoon"); // Connect to database penjualan_morning
const transaksi = dbConnection.collection("transaksi"); // Connect to table/collection transaksi

class TransaksiController {
  // Get All Data
  async getAll(req, res) {
    try {
      let data = await transaksi.find({}).toArray(); // Get all data from transaksi table

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
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Get One Data
  async getOne(req, res) {
    try {
      // Find one data
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Create data
  async create(req, res) {
    try {
      // Insert data transaksi
      let data = await transaksi.insertOne({
        barang: req.body.barang,
        pelanggan: req.body.pelanggan,
        jumlah: req.body.jumlah,
        total: req.body.total,
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data: data.ops[0],
      });
    } catch (e) {
      console.log(e);
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Update data
  async update(req, res) {
    try {
      // Update data transaksi
      await transaksi.updateOne(
        {
          _id: new ObjectId(req.params.id),
        },
        {
          $set: {
            barang: req.body.barang,
            pelanggan: req.body.pelanggan,
            jumlah: req.body.jumlah,
            total: req.body.total,
          },
        }
      );

      // Find data that updated
      let data = await transaksi.findOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success",
        data,
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }

  // Delete Data
  async delete(req, res) {
    try {
      // delete data depends on req.params.id
      let data = await transaksi.deleteOne({
        _id: new ObjectId(req.params.id),
      });

      // If success
      return res.status(200).json({
        message: "Success to delete transaksi",
      });
    } catch (e) {
      // If failed
      return res.status(500).json({
        message: "Internal Server Error",
        error: e.message,
      });
    }
  }
}

module.exports = new TransaksiController();
