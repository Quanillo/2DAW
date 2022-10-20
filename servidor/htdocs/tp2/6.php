<?php

$arr = explode("/", $_SERVER['SCRIPT_NAME']);
$documento = $arr[sizeof($arr)-1];
echo  "$documento Última modificación: " . date ("l dS F  Y H:ia.", filemtime($documento));

?>