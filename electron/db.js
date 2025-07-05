const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  port: 3307,
  password: "fahd200",
  database: "cashier"
});

module.exports = db;
