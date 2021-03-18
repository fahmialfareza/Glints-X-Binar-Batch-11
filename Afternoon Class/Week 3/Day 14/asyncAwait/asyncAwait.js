// Import fs
const fs = require("fs");

// Make Promise object
const readFile = (file, options) =>
  new Promise((success, failed) => {
    fs.readFile(file, options, (err, content) => {
      if (err) failed(err);
      return success(content);
    });
  });

const readAllFiles = async () => {
  try {
    let data = await Promise.all([
      readFile("./contents/content1.txt", "utf-8"),
      readFile("./contents/content2.txt", "utf-8"),
    ]);

    // let content1 = await readFile("./contents/content1.txt", "utf-8");
    // let content2 = await readFile("./contents/content2.txt", "utf-8");
    // let content3 = content1 + content2;

    let content = data[0] + data[1];

    console.log(content);
  } catch (e) {
    console.error("It's error!");
  }
};

readAllFiles();
