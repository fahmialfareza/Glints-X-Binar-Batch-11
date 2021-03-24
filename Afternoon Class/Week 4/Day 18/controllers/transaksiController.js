// Import database connection
const connection = require("../models");

// Get all transaksi data
const getAll = (req, res) => {
  // Get all query
  let sql =
    "SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id";

  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

const deleteData = (req, res) => {
  // Delete Query
  let sql = "DELETE FROM transaksi WHERE id = ?";

  // Run Query
  connection.query(sql, [req.params.id], (err, results) => {
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err,
      });
    }

    return res.status(200).json({
      message: "Success",
    })
  })
}

module.exports = { getAll, deleteData };
