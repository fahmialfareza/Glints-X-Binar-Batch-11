require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const fs = require("fs");
const path = require("path");
// Express
const express = require("express");
const fileUpload = require("express-fileupload");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

// Security Packages
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

// Import routes
const authRoutes = require("./routes/authRoutes");
const barangRoutes = require("./routes/barangRoutes");
const transaksiRoutes = require("./routes/transaksiRoutes");

//Set body parser for HTTP post operation
app.use(express.json()); // support json encoded bodies
app.use(
  express.urlencoded({
    extended: true,
  })
); // support encoded bodies

// To read form-data request
app.use(fileUpload());

// Prevent XSS attact
app.use(xss());

// Rate limiting
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 mins
  max: 60,
});

app.use(limiter);

// Prevent http param pollution
app.use(hpp());

// Use helmet
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

// CORS
app.use(cors());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  // create a write stream (in append mode)
  let accessLogStream = fs.createWriteStream(
    path.join(__dirname, "access.log"),
    {
      flags: "a",
    }
  );

  // setup the logger
  app.use(morgan("combined", { stream: accessLogStream }));
}

// set static assets to public directory (usually for images, videos, and other files)
app.use(express.static("public"));

// Import table relationship
require("./utils/associations");

app.use("/auth", authRoutes);
app.use("/barang", barangRoutes); // if accessing localhost:3000/barang/* we will go to barangRoutes
app.use("/transaksi", transaksiRoutes); // if accessing localhost:3000/transaksi/* we will go to transaksiRoutes

app.use(errorHandler);

// Server running
if (process.env.NODE_ENV !== "test") {
  app.listen(5000, () => console.log("server running on port 5000"));
}

module.exports = app;
