const express = require("express");
const app = express();

// Import Router
const transaksiRoutes = require("./routes/transaksiRoutes");

// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/transaksi", transaksiRoutes);

// Server running
app.listen(5000, () => console.log("Server running on 3000!"));
