const mysql = require("mysql");
const ck = require("ckey");
const password = ck.password;
const PORT = ck.PORT;
const connection = mysql.createConnection(process.env.JAWSDB_URL);

module.exports = connection;
