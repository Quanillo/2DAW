<?php
    $dado = 1;
    $intentos = 0;
    do{
        $dado = rand(1, 6);
        echo $dado . '<br>';
        $intentos ++;
    } while($dado !== 6);

    echo 'Numero de intentos hasta que el dado sacó 6: ' . $intentos;
?>