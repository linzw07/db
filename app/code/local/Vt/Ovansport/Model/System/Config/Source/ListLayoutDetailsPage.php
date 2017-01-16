<?php
/*------------------------------------------------------------------------
 # VT Megashop - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListLayoutDetailsPage
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'one_column',	'label'=>Mage::helper('productsconfig')->__('1 Column')),
			array('value'=>'two_columns_left',	'label'=>Mage::helper('productsconfig')->__('2 Columns Left')),
			array('value'=>'two_columns_right',	'label'=>Mage::helper('productsconfig')->__('2 Columns Right')),
		);
	}
}
