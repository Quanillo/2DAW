<?php

    $rango = $_POST['rango'];
    $res = array();
    
        for($i=0;$i<$rango;$i++){
            array_push($res, $i);
        }
    print_r($res);
?>