<?php
declare(strict_types=1);

class ContactoController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->hereContacto = true;

    }

}

