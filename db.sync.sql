CREATE DATABASE IF NOT EXISTS cashier;
USE cashier;


CREATE TABLE IF NOT EXISTS users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(255),
  password VARCHAR(255)
);

INSERT INTO users (username, password) VALUES ('admin', '123456');

CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price DECIMAL(10,2),
  stock INT
);