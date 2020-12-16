const { selectAll, insertOne, updateOne } = require("../config/orm");

async function renderBurgers(res) {
  const burgerData = await selectAll();
  console.log(burgerData);
  res.render("index", { burgerData: burgerData });
}

async function insertBurger({ burgerName }) {
  const insert = await insertOne(burgerName);
}

module.exports = { renderBurgers, insertBurger };
