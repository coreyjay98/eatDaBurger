const connection = require("./connection");

function createTable() {
  return new Promise(function (resolve, reject) {
    connection.query(
      `
      drop schema if exists burgersDB;
      create schema burgersDB;
      use burgersDB;
         CREATE TABLE burgers (
             id INT NOT NULL AUTO_INCREMENT,
             burgerName VARCHAR(255) NOT NULL,
             devoured TINYINT(0),
             PRIMARY KEY(id)
         );`,
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

module.exports = { selectAll, insertOne, updateOne, deleteOne, createTable };
