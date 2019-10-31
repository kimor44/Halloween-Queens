<?php

namespace App\Model;

class AdminManager extends AbstractManager
{
    const TABLE = 'attack';

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

    public function insertAttack(array $attack)
    {
        $statement = $this->pdo->prepare("INSERT INTO $this->table (`name`, `sound`) 
        VALUES (:name, :sound)");
        $statement->bindValue('name', $attack['name'], \PDO::PARAM_STR);
        $statement->bindValue('sound', $attack['sound'], \PDO::PARAM_STR);

        if ($statement->execute()) {
            return (int)$this->pdo->lastInsertId();
        }
    }

    public function insertMonster(array $monster)
    {
        $query= "INSERT INTO $this->table  (`name`, `level`, `picture`, `picture_legend`, `description`)
        VALUES (:name, :level, :picture, :picture_legend, :description)";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue('name', $monster['name'], \PDO::PARAM_STR);
        $statement->bindValue('picture', $monster['picture'], \PDO::PARAM_STR);
        $statement->bindValue('level', $monster['level'], \PDO::PARAM_INT);
        $statement->bindValue('picture_legend', $monster['picture_legend'], \PDO::PARAM_STR);
        $statement->bindValue('description', $monster['description'], \PDO::PARAM_STR);
        if ($statement->execute()) {
            return (int)$this->pdo->lastInsertId();
        }
    }
}
