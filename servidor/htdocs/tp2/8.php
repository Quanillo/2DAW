<?php
    $dia1 = date_create("2025-10-24");
    $dia2 = date_create("2022-03-16");

    $diferencia = date_diff($dia1, $dia2)->format('%y años, %m meses y %d dias');

    echo $diferencia;
?>