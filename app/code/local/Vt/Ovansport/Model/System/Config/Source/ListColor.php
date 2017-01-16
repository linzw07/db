<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListColor
{
	public function toOptionArray()
	{	
		return array(
		array('value'=>'blue', 'label'=>Mage::helper('ovansport')->__('Blue')),
		array('value'=>'yellow', 'label'=>Mage::helper('ovansport')->__('Yellow')),
		array('value'=>'boocdo', 'label'=>Mage::helper('ovansport')->__('Boocdo')),
		array('value'=>'cyan', 'label'=>Mage::helper('ovansport')->__('Cyan')),
		array('value'=>'green', 'label'=>Mage::helper('ovansport')->__('Green')),
		);
	}
}
