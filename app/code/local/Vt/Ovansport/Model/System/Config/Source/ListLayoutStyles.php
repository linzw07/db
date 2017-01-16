<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListLayoutStyles
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'1', 'label'=>Mage::helper('ovansport')->__('Full Width')),
			array('value'=>'2', 'label'=>Mage::helper('ovansport')->__('Boxed')),
		);
	}
}
