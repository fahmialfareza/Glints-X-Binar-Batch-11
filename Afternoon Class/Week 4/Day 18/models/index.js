const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "penjualan_afternoon",
});

module.exports = connection;
