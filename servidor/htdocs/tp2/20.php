<?php
    $num = rand(1, 10);
    echo $num . ' ';
    $esPrimo = false;
    if ($num == 2 || $num == 3 || $num == 5 || $num == 7) 
        $esPrimo = true;
        
 
    echo $esPrimo == false ? 'No es primo' : 'Es primo';
?>