const express = require("express");
const { updateOne, deleteOne } = require("../config/orm");
const { renderBurgers, insertBurger } = require("../models/burger");

const router = express.Router();

router.post("/burgers", async function (req, res) {
  const body = req.body;
  const insert = await insertBurger(body);
  renderBurgers(res);
});

router.get("/", function (req, res) {
  renderBurgers(res);
});
router.put("/burgers", async function (req, res) {
  const update = await updateOne(req.body);
  renderBurgers(res);
});
router.delete("/burgers", async function (req, res) {
  const deleteIt = await deleteOne(req.body);
  renderBurgers(res);
});
module.exports = router;
