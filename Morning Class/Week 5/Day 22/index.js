require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
}) // Config environment
const express = require("express"); // Import express

// Import router
const transaksiRoutes = require("./routes/transaksiRoutes");

// Make express app
const app = express();

// Enable body parser
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Make routes
app.use("/transaksi", transaksiRoutes);

// Run server
app.listen(5000, () => console.log("Server running on 3000!"));
