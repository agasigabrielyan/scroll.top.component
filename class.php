<? if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

class ScrollTop extends \CBitrixComponent
{

    public function executeComponent() {
        $this->includeComponentTemplate();
    }
}