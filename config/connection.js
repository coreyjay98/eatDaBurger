const { sequelize, DataTypes, Sequelize } = require("sequelize");
const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
const DATABASE_URL = ck.DATABASE_URL;
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "burgersDB",
  url: DATABASE_URL,
});

module.exports = connection;
