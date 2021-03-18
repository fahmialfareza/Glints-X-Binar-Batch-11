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

readFile("./contents/content1.txt", "utf-8")
  .then((content1) => {
    console.log(content1);
    return readFile("./contents/content3.txt", "utf-8");
  })
  .then((content2) => {
    console.log(content2);
  })
  .catch((error) => console.error("It's wrong!"))
