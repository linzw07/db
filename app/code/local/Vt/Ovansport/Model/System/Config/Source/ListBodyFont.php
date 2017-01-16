<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListBodyFont
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'Arial', 'label'=>Mage::helper('ovansport')->__('Arial')),
			array('value'=>'Arial Black', 'label'=>Mage::helper('ovansport')->__('Arial-black')),
			array('value'=>'Courier New', 'label'=>Mage::helper('ovansport')->__('Courier New')),
			array('value'=>'Georgia', 'label'=>Mage::helper('ovansport')->__('Georgia')),
			array('value'=>'Impact', 'label'=>Mage::helper('ovansport')->__('Impact')),
			array('value'=>'Lucida Console', 'label'=>Mage::helper('ovansport')->__('Lucida-console')),
			array('value'=>'Lucida Grande', 'label'=>Mage::helper('ovansport')->__('Lucida-grande')),
			array('value'=>'Palatino', 'label'=>Mage::helper('ovansport')->__('Palatino')),
			array('value'=>'Tahoma', 'label'=>Mage::helper('ovansport')->__('Tahoma')),
			array('value'=>'Times New Roman', 'label'=>Mage::helper('ovansport')->__('Times New Roman')),	
			array('value'=>'Trebuchet', 'label'=>Mage::helper('ovansport')->__('Trebuchet')),	
			array('value'=>'Verdana', 'label'=>Mage::helper('ovansport')->__('Verdana'))		
		);
	}
}
