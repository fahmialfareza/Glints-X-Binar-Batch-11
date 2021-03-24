const express = require("express"); // Import express
const app = express(); // Create express app

// Import routes
const transaksiRoutes = require("./routes/transaksiRoutes");

// Use to read req.body
app.use(express.urlencoded({ extended: true }));

// Define route
app.use("/transaksi", transaksiRoutes);

// Server running on port 3000
app.listen(3000, () => console.log("Server running on 3000!"));
