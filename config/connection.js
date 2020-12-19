const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
const PORT = ck.PORT;
const connection = mysql.createConnection({
  password: password,
});

module.exports = connection;
