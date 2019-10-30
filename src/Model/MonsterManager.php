<?php

namespace App\Model;

use Symfony\Component\HttpClient\HttpClient;

class MonsterManager
{
    const URLAPI = "https://hackathon-wild-hackoween.herokuapp.com/";

    public function getMonsters()
    {
        $client = HttpClient::create();
        $response = $client->request("GET", self::URLAPI."/monsters");
        return $response->toArray();
    }
}
