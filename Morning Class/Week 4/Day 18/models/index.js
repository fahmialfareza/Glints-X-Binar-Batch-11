const mysql = require("mysql2"); // Import mysql

// Make mysql connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "penjualan_morning",
});

module.exports = connection; // Export connection
