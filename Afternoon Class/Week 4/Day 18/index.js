const express = require("express");
const app = express();

// Import router
const transaksiRoutes = require("./routes/transaksiRoutes");

// Use to read req.body
app.use(express.urlencoded({ extended: false }));

// Make route
app.use("/transaksi", transaksiRoutes);

app.listen(3000, () => console.log("Server running on 3000"));
