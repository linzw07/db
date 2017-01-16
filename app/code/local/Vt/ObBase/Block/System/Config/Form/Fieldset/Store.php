<?php
/**
 * Extensions Manager Extension
 *
 * PHP versions 4 and 5
 *
 * LICENSE: This source file is subject to version 3.0 of the PHP license
 * that is available through the world-wide-web at the following URI:
 * http://store.vt.com/license.txt.  If you did not receive a copy of
 * the PHP License and are unable to obtain it through the web, please
 * send a note to admin@vt.com so we can mail you a copy immediately.
 *
 * @category   Magento Extensions
 * @package    ExtensionManager
 * @author     Vt <sales@vt.com>
 * @copyright  2007-2011 Vt
 * @license    http://store.vt.com/license.txt
 * @version    1.0.1
 * @link       http://store.vt.com
 */



class Vt_ObBase_Block_System_Config_Form_Fieldset_Store extends Mage_Adminhtml_Block_System_Config_Form_Fieldset
{

    protected $_dummyElement;
    protected $_fieldRenderer;
    protected $_values;

    public function render(Varien_Data_Form_Element_Abstract $element)
    {
        return '<div id="' . $element->getId() . '"></div>';
    }


}
