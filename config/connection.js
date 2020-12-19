const { sequelize, DataTypes, Sequelize } = require("sequelize");
const mysql = require("mysql");
const ck = require("ckey");
require("dotenv").config();
const password = ck.password;

const process = {
  url: process.env.DATABASE_URL,
};

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: password,
  database: "burgersDB",
});

module.exports = { connection, process };
