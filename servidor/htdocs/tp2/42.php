<?php
    $num=1234;
    $strNum = (string) $num;
    $cont = 0;
    echo $strNum . '<br>';
    for($i=0; $i<strlen($strNum); $i++){
        $cont += $strNum[$i];
    }
    echo 'Suma de los digitos: ' . $cont;
?>