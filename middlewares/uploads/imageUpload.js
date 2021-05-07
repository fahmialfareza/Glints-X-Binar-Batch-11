const path = require("path"); // to detect path of directory
const crypto = require("crypto"); // to encrypt something
const sharp = require("sharp");
// Import required AWS SDK clients and commands for Node.js
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");

// Set the AWS region
const REGION = "ap-southeast-1"; //e.g. "us-east-1"

// Set the parameters.
const uploadParams = (directory, filename, body, mimetype) => {
  return {
    ACL: "public-read",
    Bucket: process.env.S3_BUCKET,
    Key: `${directory}/${filename}`,
    Body: body,
    ContentType: mimetype,
  };
};

// Create Amazon S3 service client object.
const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});

const run = async (directory, filename, body, mimetype) => {
  try {
    const data = await s3.send(
      new PutObjectCommand(uploadParams(directory, filename, body, mimetype))
    );

    return directory + "/" + filename;
  } catch (err) {
    console.log("Error", err);
  }
};

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
        errors.push("Image must be less than 1MB");
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
      file.nameCompress = `${fileName}-compress${path.parse(file.name).ext}`;

      // Upload original one
      // Upload image to /public/images
      req.body.image = await run(
        req.body.directory,
        file.name,
        file.data,
        file.mimetype
      );

      // Upload compress image
      if (file.mimetype === "image/png") {
        file.dataCompress = await sharp(file.data)
          .rotate()
          .resize(512)
          .png()
          .toBuffer();
      } else {
        file.dataCompress = await sharp(file.data)
          .rotate()
          .resize(512)
          .jpeg({ mozjpeg: true })
          .toBuffer();
      }

      await run(
        req.body.directory,
        file.nameCompress,
        file.dataCompress,
        "image/png"
      );
    }

    next();
  } catch (e) {
    return next(e);
  }
};
