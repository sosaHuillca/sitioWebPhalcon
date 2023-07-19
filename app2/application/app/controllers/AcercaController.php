<?php
declare(strict_types=1);

class AcercaController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->hereAcerca = true;

    }

}

