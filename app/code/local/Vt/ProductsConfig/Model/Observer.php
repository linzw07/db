<?php
class Vt_ProductsConfig_Model_Observer{

public function getCardAndModifyViewPrice($observer){
        /*
          calculations for my dynamic price based on selected card type
        */
    $product = $observer->getProduct();
    $product->setFinalPrice($dynamic_price);
}
}