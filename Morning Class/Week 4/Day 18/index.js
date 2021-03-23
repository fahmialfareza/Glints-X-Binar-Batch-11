const express = require("express");
const app = express();

// Import route
const transaksiRoutes = require("./routes/transaksiRoutes");

// Use to read the req.body
app.use(express.urlencoded({ extended: false }));

// Make route
app.use("/transaksi", transaksiRoutes);

// Server run on port 3000
app.listen(3000, () => console.log("This server running on 3000"));
