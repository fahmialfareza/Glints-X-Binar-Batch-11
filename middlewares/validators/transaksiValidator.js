const { transaksi, barang, pelanggan, pemasok } = require("../../models"); // Import all models
const validator = require("validator"); // Import validator

exports.create = async (req, res, next) => {
  try {
    // Find barang and pelanggan
    let findData = await Promise.all([
      barang.findOne({
        where: { id: req.body.id_barang },
      }),
      pelanggan.findOne({
        where: { id: req.body.id_pelanggan },
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
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    // Get the price
    let price = findData[0].harga;

    // req.body.total add value
    req.body.total = eval(price * req.body.jumlah);

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return next(e);
  }
};

exports.update = async (req, res, next) => {
  try {
    // Find barang, pelanggan, transaksi
    let findData = await Promise.all([
      barang.findOne({
        where: { id: req.body.id_barang },
      }),
      pelanggan.findOne({
        where: { id: req.body.id_pelanggan },
      }),
      transaksi.findOne({
        where: { id: req.params.id }, // because we will update transaksi
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

    // If transaksi not found
    if (!findData[2]) {
      errors.push("Transaksi Not Found");
    }

    if (!validator.isNumeric(req.body.jumlah)) {
      errors.push("Jumlah must be a number");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    // Get the price
    let price = findData[0].harga;

    // req.body.total add value
    req.body.total = eval(price * req.body.jumlah);

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return next(e);
  }
};
