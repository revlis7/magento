<?php
class Tnc_Customer_Helper_Data extends Mage_Customer_Helper_Data
{
    public function getLoginUrl()
    {
        return $this->_getUrl(self::ROUTE_ACCOUNT_LOGIN, $this->getLoginUrlParams());
    }
}
