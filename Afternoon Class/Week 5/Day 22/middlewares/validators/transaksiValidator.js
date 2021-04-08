const validator = require("validator");
const { ObjectId } = require("mongodb");
const connection = require("../../models");
const penjualan = connection.db("penjualan_afternoon"); // Connect to penjualan database
const transaksi = penjualan.collection("transaksi"); // Connect to transaksi collection / table

exports.create = async (req, res, next) => {
  try {
    // Get barang and pelanggan
    let findData = await Promise.all([
      penjualan.collection("barang").findOne({
        _id: new ObjectId(req.body.id_barang),
      }),
      penjualan.collection("pelanggan").findOne({
        _id: new ObjectId(req.body.id_pelanggan),
      }),
    ]);

    // Create errors variable
    let errors = [];

    // If barang not found
    if (!findData[0]) {
      errors.push("Barang Not Found");
    }

    // If pelanggan not found
    if (!findData[1]) {
      errors.push("Pelanggan Not Found");
    }

    if (!validator.isNumeric(req.body.jumlah)) {
      errors.push("Jumlah must be a number");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    // add some req.body for used in Controller
    req.body.barang = findData[0];
    req.body.pelanggan = findData[1];
    req.body.total = eval(findData[0].harga.toString()) * req.body.jumlah; // Calculate total of transaksi

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: e.message,
    });
  }
};

exports.update = async (req, res, next) => {
  try {
    // Get barang and pelanggan
    let findData = await Promise.all([
      penjualan.collection("barang").findOne({
        _id: new ObjectId(req.body.id_barang),
      }),
      penjualan.collection("pelanggan").findOne({
        _id: new ObjectId(req.body.id_pelanggan),
      }),
      transaksi.findOne({
        _id: new ObjectId(req.params.id),
      }),
    ]);

    // Create errors variable
    let errors = [];

    // If barang not found
    if (!findData[0]) {
      errors.push("Barang Not Found");
    }

    // If pelanggan not found
    if (!findData[1]) {
      errors.push("Pelanggan Not Found");
    }

    if (!findData[2]) {
      errors.push("Transaksi Not Found");
    }

    if (!validator.isNumeric(req.body.jumlah)) {
      errors.push("Jumlah must be a number");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    // add some req.body for used in Controller
    req.body.barang = findData[0];
    req.body.pelanggan = findData[1];
    req.body.total = eval(findData[0].harga.toString()) * req.body.jumlah; // Calculate total of transaksi

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: e.message,
    });
  }
};
