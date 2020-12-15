CREATE schema burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burgerName VARCHAR(255) NOT NULL,
    devoured TINYINT(0),
    PRIMARY KEY(id)
);