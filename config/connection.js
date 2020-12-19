const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
const PORT = ck.PORT;
const connection = mysql.createConnection({
  host: "n2o93bb1bwmn0zle.chr7pe7iynqr.eu-west-1.rds.amazonaws.com",
  user: "ue6j2q6gugp5ggfu",
  password: password,
  database: "burgersDB",
  port: PORT,
});

module.exports = connection;
