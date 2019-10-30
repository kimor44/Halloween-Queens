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
}
