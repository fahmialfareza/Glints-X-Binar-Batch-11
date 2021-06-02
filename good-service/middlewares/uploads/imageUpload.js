const path = require("path"); // to detect path of directory
const crypto = require("crypto"); // to encrypt something
const { uploadImage } = require("../../helpers/s3");

exports.uploadImage = async (req, res, next) => {
  try {
    // Initialita
    let errors = [];

    // If image was uploaded
    if (req.files) {
      const file = req.files.image;

      // Make sure image is photo
      if (!file.mimetype.startsWith("image")) {
        errors.push("File must be an image");
      }

      // Check file size (max 1MB)
      if (file.size > 1000000) {
        errors.push("Image must be less than 1 MB");
      }

      // If errors length > 0, it will make errors message
      if (errors.length > 0) {
        // Because bad request
        return next({ message: errors.join(", "), statusCode: 400 });
      }

      // Create custom filename
      let fileName = crypto.randomBytes(16).toString("hex");

      // Rename the file
      file.name = `${fileName}${path.parse(file.name).ext}`;

      // Upload original one
      // Upload image to /public/images
      req.body.image = await uploadImage(
        req.body.directory,
        file.name,
        file.data,
        file.mimetype
      );
    }

    next();
  } catch (e) {
    return next(e);
  }
};
