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

readFile("./contents/content1.txt", "utf-8")
  .then((content1) => {
    console.log(content1);
    return readFile("./contents/content2.txt", "utf-8");
  })
  .then((content2) => {
    console.log(content2);
  })
  .catch((err) => console.error("It's error!"))
