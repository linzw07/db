<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListBgRepeat
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'repeat', 'label'=>Mage::helper('ovansport')->__('repeat')),
			array('value'=>'repeat-x', 'label'=>Mage::helper('ovansport')->__('repeat-x')),
			array('value'=>'repeat-y', 'label'=>Mage::helper('ovansport')->__('repeat-y')),
			array('value'=>'no-repeat', 'label'=>Mage::helper('ovansport')->__('no-repeat'))
		);
	}
}
