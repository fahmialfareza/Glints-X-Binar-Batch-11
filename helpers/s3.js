// Import required AWS SDK clients and commands for Node.js
const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");

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

const deleteParams = (filename) => {
  return {
    Bucket: process.env.S3_BUCKET,
    Key: filename,
  };
};

// Create Amazon S3 service client object.
const s3 = new S3Client({
  signatureVersion: "v4",
  s3ForcePathStyle: "true",
  region: REGION,
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
});

exports.uploadImage = async (directory, filename, body, mimetype) => {
  try {
    const data = await s3.send(
      new PutObjectCommand(uploadParams(directory, filename, body, mimetype))
    );

    return directory + "/" + filename;
  } catch (err) {
    console.log("Error", err);
  }
};

exports.deleteImage = async (filename) => {
  try {
    const data = await s3.send(new DeleteObjectCommand(deleteParams(filename)));

    return;
  } catch (e) {
    console.log(e);
  }
};
