const mysql = require("mysql");
const config = require("config");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: config.get("mysql.host"),
  user: config.get("mysql.username"),
  password: config.get("mysql.password"),
  database: config.get("mysql.db")
});

module.exports = pool;
