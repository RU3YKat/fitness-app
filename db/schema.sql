DROP DATABASE IF EXISTS calorie_tracker_db;
CREATE DATABASE calorie_tracker_db;
USE calorie_tracker_db;

CREATE TABLE foods (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  meal VARCHAR(25),
  calories INT
);