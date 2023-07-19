<?php
declare(strict_types=1);

class BlogController extends ControllerBase
{

    public function indexAction()
    {
      $this->view->hereBlog = true;
    }

}

