<?php

class Vt_ProductsConfig_Model_System_Config_Source_TimeSources
{
	public function toOptionArray()
	{
		return array(
			array('value'=>'group',	'label'=>Mage::helper('productsconfig')->__('Group')),
        	array('value'=>'single',	'label'=>Mage::helper('productsconfig')->__('Single'))
		);
	}
}