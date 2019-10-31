<?php
/**
 * Created by PhpStorm.
 * User: aurelwcs
 * Date: 08/04/19
 * Time: 18:40
 */

namespace App\Controller;

use App\Model\HomeManager;
use App\Model\MonsterManager;
use App\Service\MonsterTransformer;
use Symfony\Component\HttpClient\HttpClient;

class HomeController extends AbstractController
{

    /**
     * Display home page
     *
     * @return string
     * @throws \Twig\Error\LoaderError
     * @throws \Twig\Error\RuntimeError
     * @throws \Twig\Error\SyntaxError
     */
    public function index()
    {
        return $this->twig->render('Home/index.html.twig');
    }

    public function monstersAPI()
    {
        $monsterApi = new MonsterManager();
        $monsterApi->getMonsters();
    }

    public function monsterAll()
    {
        $monsterAll = new HomeManager();
        $monsters = $monsterAll->selectAll();
        foreach ($monsters as $position => $monster) {
            $monsters[$position]['attacks'] = $monsterAll->selectAttackByMonster($monster['id']);
        }
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=utf-8");
        return json_encode($monsters);
    }
}
