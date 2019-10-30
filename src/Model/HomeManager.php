<?php

namespace App\Model;

class HomeManager extends AbstractManager
{
    const TABLE = 'monster';

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

    public function selectAttackByMonster(int $id)
    {
        $query = "SELECT a.id, a.name, a.sound, am.limitstroke
            FROM monster m JOIN attackmonster am 
            ON m.id = am.monster_id
            JOIN attack a ON a.id = am.attack_id
            WHERE m.id = :id";
        $statement = $this->pdo->prepare($query);
        $statement->bindValue('id', $id, \PDO::PARAM_INT);
        $statement->execute();

        return $statement->fetchAll(\PDO::FETCH_ASSOC);
    }
}
