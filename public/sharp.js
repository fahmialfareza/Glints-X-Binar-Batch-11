const sharp = require("sharp");

const compressImage = async () => {
  const result = await sharp("images/logo.png")
    .rotate()
    .resize(512)
    .png()
    .toBuffer();

  console.log(result);
};

compressImage();
