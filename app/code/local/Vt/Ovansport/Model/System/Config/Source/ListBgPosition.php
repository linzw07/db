<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListBgPosition
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'left top', 'label'=>Mage::helper('ovansport')->__('left top')),
			array('value'=>'left top', 'label'=>Mage::helper('ovansport')->__('left top')),
			array('value'=>'left bottom', 'label'=>Mage::helper('ovansport')->__('left bottom')),
			array('value'=>'right top', 'label'=>Mage::helper('ovansport')->__('right top')),
			array('value'=>'right center', 'label'=>Mage::helper('ovansport')->__('right center')),
			array('value'=>'right bottom', 'label'=>Mage::helper('ovansport')->__('right bottom')),
			array('value'=>'center top', 'label'=>Mage::helper('ovansport')->__('center top')),
			array('value'=>'center center', 'label'=>Mage::helper('ovansport')->__('center center')),
			array('value'=>'center bottom', 'label'=>Mage::helper('ovansport')->__('center bottom'))
		);
	}
}
