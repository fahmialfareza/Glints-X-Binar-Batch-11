const mongoose = require("mongoose");
const axios = require("axios");
const validator = require("validator");

exports.getOne = async (req, res, next) => {
  try {
    let errors = [];

    // Check id_barang is valid or not
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      errors.push("Good id is not valid ");
    }

    // If the parameters is not valid it will go here
    if (errors.length > 0) {
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    // Go to next
    next();
  } catch (e) {
    return next(e);
  }
};

exports.create = async (req, res, next) => {
  try {
    let errors = [];

    // Check id_barang is valid or not
    if (!validator.isUUID(req.body.good)) {
      errors.push("Good id is not valid ");
    }

    // If the parameters is not valid it will go here
    if (errors.length > 0) {
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    // Find good
    let findData = await axios.get(
      `${process.env.API_GATEWAY_URL}/goods/${req.body.good}`
    );

    // Check is jumlah numeric?
    if (!validator.isNumeric(req.body.quantity)) {
      errors.push("Jumlah must be a number");
    }

    // If errors
    if (errors.length > 0) {
      return res.status(400).json({
        message: errors.join(", "),
      });
    }

    // Calculate total
    req.body.user = req.user.id;
    req.body.good = findData.data.data;
    req.body.total = eval(req.body.good.price * req.body.quantity);

    // Go to next
    next();
  } catch (e) {
    return next(e);
  }
};
