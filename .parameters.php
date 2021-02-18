<? if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
use Bitrix\Main\Localization\Loc;

$arComponentParameters = array(
    "PARAMETERS" => array(
        "SCROLL_BUTTON_IMAGE_PATH" => array(
            "NAME" => Loc::getMessage("SCROLL_BUTTON_IMAGE_PATH"),
            "TYPE" => "STRING",
            "DEFAULT" => $componentPath . "/images/icon.png"
        ),
    )
);