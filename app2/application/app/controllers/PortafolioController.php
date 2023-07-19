<?php
declare(strict_types=1);

class PortafolioController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->herePortafolio = true;

    }

}

