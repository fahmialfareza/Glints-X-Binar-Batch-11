const mysql = require("mysql2");

// Make mysql connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'penjualan_morning'
});

module.exports = connection;
