<?php
class Tnc_Member_Block_Script extends Mage_Core_Block_Template
{
  public function isLoggedIn()
  {
    return $this->helper('customer')->isLoggedIn();
  }
}