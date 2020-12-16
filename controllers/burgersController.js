const express = require("express");
const { renderBurgers, insertBurger } = require("../models/burger");

const router = express.Router();

router.get("/", function (req, res) {
  renderBurgers(res);
});

router.post("/burgers", async function (req, res) {
  const body = req.body;
  const insert = await insertBurger(body);
  renderBurgers(res);
});

module.exports = router;
