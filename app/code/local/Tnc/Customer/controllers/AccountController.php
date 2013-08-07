<?php
require_once Mage::getModuleDir('controllers', 'Mage_Customer').DS.'AccountController.php';

class Tnc_Customer_AccountController extends Mage_Customer_AccountController
{
    public function helloAction()
    {
        echo 'hello world';
    }
}