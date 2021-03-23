// Import mysql connection
const mysql = require("../models");

const getAll = (req, res) => {
  try {
    // get All transaksi data (Query)
    let sql =
      "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, b.harga, pem.nama as nama_pemasok, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id";

    // Run Query
    mysql.query(sql, (err, result) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err,
        });
      }

      // If success
      return res.status(200).json({
        message: "Success",
        data: result,
      });
    });
  } catch (e) {
    // If error
    return res.status(500).json({
      message: "Internal Server Error",
      error: err,
    });
  }
};

module.exports = { getAll }; // Export module getAll
