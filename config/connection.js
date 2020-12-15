const { sequelize, DataTypes, Sequelize } = require("sequelize");
const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: password,
  database: "burgersDB",
});

module.exports = connection;
