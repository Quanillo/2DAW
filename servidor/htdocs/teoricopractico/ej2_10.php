
<?php

    $arr = explode("/", $_SERVER['SCRIPT_NAME']);
    $documento = $arr[sizeof($arr)-1];
    $arrowner = posix_getpwuid(fileowner($documento));
    print_r($arrowner['name']);

 

?>
