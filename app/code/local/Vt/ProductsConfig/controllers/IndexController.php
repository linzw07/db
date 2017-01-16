<?php

class Vt_ProductsConfig_IndexController extends Mage_Core_Controller_Front_Action{
    public function IndexAction() {
	  $this->loadLayout();
      $this->renderLayout();
    }
	public function testAction(){
    	$myblock = $this->getLayout()->createBlock('productsconfig/list')->testAjax();
    	echo $myblock;
    }
    public function ajaxAction() {
		$block   = $this->getLayout()->createBlock('productsconfig/list');                                    
        echo $listProducts = $block->toHtml();
		//echo '{"listProducts":'.$listProducts.'}';
    }
	public function ajaxloadmoreAction() {
		$block   = $this->getLayout()->createBlock('productsconfig/list');                                    
        $listProducts = json_encode($block->toHtml());
        echo '{"listProducts":'.$listProducts.'}';
    }
}