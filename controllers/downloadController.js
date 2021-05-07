// AWS S3 Zip
const fs = require("fs");
const join = require("path").join;
const AWS = require("aws-sdk");
const s3Zip = require("s3-zip");
const XmlStream = require("xml-stream");

class DownloadController {
  async download(req, res) {
    const region = "ap-southeast-1";
    const bucket = process.env.S3_BUCKET;
    const folder = "barang/";
    const s3 = new AWS.S3({
      signatureVersion: "v4",
      s3ForcePathStyle: "true",
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET_KEY,
    });
    const params = {
      Bucket: bucket,
      Prefix: folder,
    };

    const filesArray = [];
    const files = s3.listObjects(params).createReadStream();
    const xml = new XmlStream(files);
    xml.collect("Key");
    xml.on("endElement: Key", function (item) {
      filesArray.push(item["$text"].substr(folder.length));
    });

    xml.on("end", function () {
      zip(filesArray);
    });

    function zip(files) {
      res.set("content-type", "application/zip");
      res.set("Content-Disposition", "attachment; filename=file.zip");
      const output = fs.createWriteStream(join(__dirname, "use-s3-zip.zip"));
      s3Zip
        .archive(
          {
            s3: s3,
            region: region,
            bucket: bucket,
            preserveFolderStructure: true,
          },
          folder,
          files
        )
        .pipe(res);
    }
  }
}

module.exports = new DownloadController();
