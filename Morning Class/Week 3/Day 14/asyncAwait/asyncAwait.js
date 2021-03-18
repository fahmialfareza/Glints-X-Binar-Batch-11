// Import fs
const fs = require("fs");

// Make promise object
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

    console.log(data[0] + data[1]);
  } catch (e) {
    console.log("What the error!");
  }
};

readAllFiles();
