const validator = require("validator");

module.exports.create = async (req, res, next) => {
  try {
    let errors = [];

    if (!req.body.name) {
      errors.push("Name is required");
    }

    // Check harga is number
    if (!validator.isNumeric(req.body.price)) {
      errors.push("Price must be a number");
    }

    if (!req.body.description) {
      errors.push("Description is required");
    }

    if (!req.files.image) {
      errors.push("Image is required");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    req.body.directory = "goods";
    req.body.id_user = req.user.id;

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return next(e);
  }
};

module.exports.update = async (req, res, next) => {
  try {
    let errors = [];

    if (!req.body.name) {
      errors.push("Name is required");
    }

    // Check harga is number
    if (!validator.isNumeric(req.body.price)) {
      errors.push("Price must be a number");
    }

    if (!req.body.description) {
      errors.push("Description is required");
    }

    // If errors length > 0, it will make errors message
    if (errors.length > 0) {
      // Because bad request
      return next({ message: errors.join(", "), statusCode: 400 });
    }

    req.body.directory = "goods";

    // It means that will be go to the next middleware
    next();
  } catch (e) {
    return next(e);
  }
};
