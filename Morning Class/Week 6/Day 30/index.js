require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
// Express
const express = require("express");
const fileUpload = require("express-fileupload");

// Import routes
const authRoutes = require("./routes/authRoutes");
const barangRoutes = require("./routes/barangRoutes");
const pelangganRoutes = require("./routes/pelangganRoutes");
const transaksiRoutes = require("./routes/transaksiRoutes");

// Make express app
const app = express();

// Body-parser to read req.body
app.use(express.json()); // Enable req.body JSON type
app.use(
  express.urlencoded({
    extended: true,
  })
); // Support urlencode body

// To read form-data request
app.use(fileUpload());

// Set static file directory
app.use(express.static("public"));

// Make routes
app.use("/auth", authRoutes);
app.use("/pelanggan", pelangganRoutes);
app.use("/barang", barangRoutes);
app.use("/transaksi", transaksiRoutes);

// If environment is not test
if (process.env.NODE_ENV !== "test") {
  // Running server
  app.listen(5000, () => console.log("Server running on 5000"));
}

// Export for unit testing
module.exports = app;
