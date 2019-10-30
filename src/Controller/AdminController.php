<?php

namespace App\Controller;

use App\Model\AdminManager;

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
}
