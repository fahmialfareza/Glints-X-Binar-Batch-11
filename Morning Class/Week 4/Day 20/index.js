// Express
const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // post body handler

// Import routes
const transaksiRoutes = require("./routes/transaksiRoutes.js");

//Set body parser for HTTP post operation
app.use(bodyParser.json()); // support json encoded bodies
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // support encoded bodies

// set static assets to public directory (usually for images, videos, and other files)
app.use(express.static("public"));

// Import table relationship
require("./utils/associations");

app.use("/transaksi", transaksiRoutes); // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes

// Server running
app.listen(3000, () => console.log("server running on port 3000"));
