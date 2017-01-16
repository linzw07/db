<?php
/*------------------------------------------------------------------------
 # VT Ovansport - Version 1.0
 # Copyright (c) 2014 The VnThemePro Company. All Rights Reserved.
 # @license - Copyrighted Commercial Software
 # Author: VnThemePro Company
 # Websites: http://www.vnthemepro.com
-------------------------------------------------------------------------*/

class Vt_Ovansport_Model_System_Config_Source_ListGoogleFont
{
	public function toOptionArray()
	{	
		return array(
			array('value'=>'', 'label'=>Mage::helper('ovansport')->__('No select')),
			array('value'=>'Roboto', 'label'=>Mage::helper('ovansport')->__('Roboto')),
			array('value'=>'Anton', 'label'=>Mage::helper('ovansport')->__('Anton')),
			array('value'=>'Questrial', 'label'=>Mage::helper('ovansport')->__('Questrial')),
			array('value'=>'Kameron', 'label'=>Mage::helper('ovansport')->__('Kameron')),
			array('value'=>'Oswald', 'label'=>Mage::helper('ovansport')->__('Oswald')),
			array('value'=>'Open Sans', 'label'=>Mage::helper('ovansport')->__('Open Sans')),
			array('value'=>'BenchNine', 'label'=>Mage::helper('ovansport')->__('BenchNine')),
			array('value'=>'Droid Sans', 'label'=>Mage::helper('ovansport')->__('Droid Sans')),
			array('value'=>'Droid Serif', 'label'=>Mage::helper('ovansport')->__('Droid Serif')),
			array('value'=>'PT Sans', 'label'=>Mage::helper('ovansport')->__('PT Sans')),
			array('value'=>'Vollkorn', 'label'=>Mage::helper('ovansport')->__('Vollkorn')),
			array('value'=>'Ubuntu', 'label'=>Mage::helper('ovansport')->__('Ubuntu')),
			array('value'=>'Neucha', 'label'=>Mage::helper('ovansport')->__('Neucha')),
			array('value'=>'Cuprum', 'label'=>Mage::helper('ovansport')->__('Cuprum')),
			array('value'=>'Philosopher', 'label'=>Mage::helper('ovansport')->__('Philosopher'))
		);
	}
}
