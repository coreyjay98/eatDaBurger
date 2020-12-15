const express = require("express");
const ck = require("ckey");
const PORT = ck.port;

const app = express();

app.listen(PORT, function () {
  console.log("Listening on server 3000");
});
