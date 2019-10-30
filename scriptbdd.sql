
CREATE DATABASE IF NOT EXISTS halloween_queens;

USE halloween_queens;

CREATE TABLE `monster` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    level INT NOT NULL,
    picture VARCHAR(255) NOT NULL,
    picture_legend VARCHAR(255),
    description TEXT NOT NULL
);

CREATE TABLE `attack` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    sound VARCHAR(100) NOT NULL
);

CREATE TABLE `attackmonster` (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    monster_id INT NOT NULL,
    attack_id INT NOT NULL,
    FOREIGN KEY (monster_id)
        REFERENCES monster(id),
    FOREIGN KEY (attack_id)
        REFERENCES attack(id),
    limitstroke INT NOT NULL
);


