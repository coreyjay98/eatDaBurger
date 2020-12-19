const connection = require("./connection");

function selectAll() {
  return new Promise(function (resolve, reject) {
    connection.query("SELECT * FROM burgers", function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

function insertOne(burgerName) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `INSERT INTO
      burgers (burgerName, devoured)
  VALUES
      ('${burgerName}', 0);`,
      function (err, res) {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    );
  });
}
function updateOne(response) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `UPDATE burgers SET devoured = true WHERE id = ${response.id}`,
      function (err, res) {
        if (err) reject(err);
        else {
          resolve(res);
        }
      }
    );
  });
}
function deleteOne(response) {
  return new Promise(function (resolve, reject) {
    connection.query(
      `DELETE from burgers WHERE id = ${response.id}`,
      function (err, res) {
        if (err) reject(err);
        else {
          resolve(res);
        }
      }
    );
  });
}

module.exports = { selectAll, insertOne, updateOne, deleteOne };
