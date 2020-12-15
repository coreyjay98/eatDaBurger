const connection = require("./connection");

function selectAll() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM burgers", function (err, res) {
      if (err) {
        reject(err);
      } else {
        console.log(res);
        resolve(res);
      }
    });
  });
}

function insertOne(response) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO
      burgers (burgerName, devoured)
  VALUES
      ('${response.name}', ${response.devoured});`,
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          console.log(res);
          resolve(res);
        }
      }
    );
  });
}
function updateOne(response) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `UPDATE burgers SET devoured = false WHERE id = 1`,
      function (err, res) {
        if (err) reject(err);
        else {
          console.log(res);
          resolve(res);
        }
      }
    );
  });
}
