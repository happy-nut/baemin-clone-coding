CREATE DATABASE IF NOT EXISTS restaurant_api_test CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

CREATE USER IF NOT EXISTS 'restaurant_api_tester'@'localhost' IDENTIFIED by 'Mm6SkgR7wFl42s$I';
GRANT ALL PRIVILEGES ON restaurant_api_test.* to 'restaurant_api_tester'@'localhost';
FLUSH PRIVILEGES;
