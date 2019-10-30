<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class MonsterManager extends AbstractManager
{

    const TABLE = 'monster';

    const URLAPI = "https://hackathon-wild-hackoween.herokuapp.com";

    public function __construct()
    {
        parent::__construct(self::TABLE);
    }

    public function getMonsters()
    {
        $client = HttpClient::create();
        $response = $client->request("GET", self::URLAPI."/monsters");
        return $response->toArray();
    }
}
