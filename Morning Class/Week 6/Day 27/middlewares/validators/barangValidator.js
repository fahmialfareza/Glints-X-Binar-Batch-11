const mongoose = require("mongoose");
const validator = require("validator");
const { barang, pelanggan, pemasok, transaksi } = require("../../models");

exports.create = async (req, res, next) => {
  // Initialita
  let errors = [];

  // Check id_pemasok
  if (!mongoose.Types.ObjectId.isValid(req.body.id_pemasok)) {
    errors.push(
      "id_pemasok is not valid and must be 24 character & hexadecimal"
    );
  }

  // If params error
  if (errors.length > 0) {
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  // find pemasok
  let dataPemasok = await pemasok.findOne({ _id: req.body.id_pemasok });

  // If data pemasok not found
  if (!dataPemasok) {
    errors.push("Pemasok not found");
  }

  // Check harga is number
  if (!validator.isNumeric(req.body.harga)) {
    errors.push("Harga must be a number");
  }

  // If errors length > 0, it will make errors message
  if (errors.length > 0) {
    // Because bad request
    return res.status(400).json({
      message: errors.join(", "),
    });
  }

  req.body.pemasok = req.body.id_pemasok;

  // It means that will be go to the next middleware
  next();
};
