const mongoose = require("mongoose"); // Import mongoose

const uri = process.env.MONGO_URI; // Add URI MongoDB Atlas

// Connect express to MongoDB with mongoose
mongoose
  .connect(uri, {
    useUnifiedTopology: true, // Must be added
    useNewUrlParser: true, // Must be added
    useCreateIndex: true, // Use to enable unique data type
    useFindAndModify: false, // Use findOneAndUpdate instead of findAndModify
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.error(err));

// Import models
const barang = require("./barang");
const pelanggan = require("./pelanggan");
const pemasok = require("./pemasok");
const transaksi = require("./transaksi");
const user = require("./user");

module.exports = { barang, pelanggan, pemasok, transaksi, user }; // Export models
