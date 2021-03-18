// Import fs
const fs = require("fs");

// Start fs callback (ES5)
fs.readFile("./contents/content1.txt", "utf-8", (err, content1) => {
  if (err) throw err;
  console.log(content1);
  fs.readFile("./contents/content2.txt", "utf-8", (err, content2) => {
    if (err) throw err;
    console.log(content2);
  });
});
