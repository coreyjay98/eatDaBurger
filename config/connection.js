const { sequelize, DataTypes, Sequelize } = require("sequelize");
const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
require("dotenv").config();
const DATABASE_URL = ck.DATABASE_URL;
const connection = mysql.createConnection({
  host: "n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "ue6j2q6gugp5ggfu",
  password: password,
  database: "burgersDB",
  port: process.env.PORT,
});

module.exports = connection;
