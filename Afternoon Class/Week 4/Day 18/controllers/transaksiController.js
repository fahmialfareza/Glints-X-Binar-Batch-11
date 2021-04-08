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
        error: err.message,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
      data: results,
    });
  });
};

const getOne = (req, res) => {
  // Get One Query
  let sql = `SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE t.id = ${req.params.id}`;

  // Run Query
  connection.query(sql, (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
      data: results[0],
    });
  });
};

const create = (req, res) => {
  // Find barang to get the price
  let sqlFindBarang = `SELECT * FROM barang WHERE id = ${req.body.id_barang}`;

  // Run Query
  connection.query(sqlFindBarang, (err, results) => {
    let price = eval(results[0].harga); // To get barang price
    let total = eval(price * req.body.jumlah); // Calculate total of transaksi

    // Create transaksi
    let sqlCreate = `INSERT INTO transaksi(id_barang, id_pelanggan, jumlah, total) VALUES (${req.body.id_barang}, ${req.body.id_pelanggan}, ${req.body.jumlah}, ${total})`;

    // Run Query
    connection.query(sqlCreate, (err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err.message,
        });
      }

      // If no error
      let sqlSelect = `SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE t.id = ${results.insertId}`;

      // Run select
      connection.query(sqlSelect, (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err.message,
          });
        }

        // If no error
        return res.status(201).json({
          message: "Success",
          data: results[0],
        });
      });
    });
  });
};

const update = (req, res) => {
  // Find barang to get the price
  let sqlFindBarang = `SELECT * FROM barang WHERE id = ${req.body.id_barang}`;

  connection.query(sqlFindBarang, (err, results) => {
    let price = eval(results[0].harga); // To get barang price
    let total = eval(price * req.body.jumlah); // Calculate total of transaksi

    let sqlUpdate = `UPDATE transaksi SET id_barang = ${req.body.id_barang}, id_pelanggan = ${req.body.id_pelanggan}, jumlah = ${req.body.jumlah}, total = ${total} WHERE id = ${req.params.id}`;

    connection.query(sqlUpdate, (err, results) => {
      // If error
      if (err) {
        return res.status(500).json({
          message: "Internal Server Error",
          error: err.message,
        });
      }

      // If no error
      let sqlSelect = `SELECT t.id, p.nama as nama_pelanggan, b.nama as nama_barang, pem.nama as nama_pemasok, b.harga, t.waktu, t.jumlah, t.total FROM transaksi t JOIN barang b ON t.id_barang = b.id JOIN pelanggan p ON p.id = t.id_pelanggan JOIN pemasok pem ON b.id_pemasok = pem.id WHERE t.id = ${req.params.id}`;

      // Run select
      connection.query(sqlSelect, (err, results) => {
        // If error
        if (err) {
          return res.status(500).json({
            message: "Internal Server Error",
            error: err.message,
          });
        }

        // If no error
        return res.status(201).json({
          message: "Success",
          data: results[0],
        });
      });
    });
  });
};

const deleteData = (req, res) => {
  // Delete Query
  let sql = "DELETE FROM transaksi WHERE id = ?";

  // Run Query
  connection.query(sql, [req.params.id], (err, results) => {
    // If error
    if (err) {
      return res.status(500).json({
        message: "Internal Server Error",
        error: err.message,
      });
    }

    // If no error
    return res.status(200).json({
      message: "Success",
    });
  });
};

module.exports = { getAll, getOne, create, update, deleteData };
