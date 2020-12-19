const express = require("express");
const ck = require("ckey");
const { renderBurgers } = require("./models/burger");
const burgersController = require("./controllers/burgersController");
const exphbs = require("express-handlebars");
const { createTable } = require("./config/orm");
const PORT = preocess.env.PORT || ck.port;
const app = express();

// sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars as the default template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static(__dirname + "/views"));
app.use("/", burgersController);

app.listen(PORT, function () {
  createTable();
  console.log("Listening on server 3000");
});
