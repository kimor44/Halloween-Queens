<?php

namespace App\Controller;

use App\Model\AdminManager;
use Symfony\Component\HttpClient\HttpClient;
use App\Model\MonsterManager;

class AdminController extends AbstractController
{
    public function showNewAttack()
    {
        $adminManager = new AdminManager();
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $adminManager->insertAttack($_POST);
        }
        return $this->twig->render('Admin/index.html.twig');
    }

    public function insertmonster()
    {
        $adminManager = new AdminManager();
        $monsterApi = new MonsterManager();
        $monstersfromAPI = $monsterApi->getMonsters();
        if ($_SERVER['REQUEST_METHOD'] === "POST") {
            $adminManager->insertMonster($_POST);
        }
        foreach ($monstersfromAPI as $monsters) {
            return $this->twig->render('Admin/insertM.html.twig', ['monstersAPI' => $monsters]);
        }
    }
}
