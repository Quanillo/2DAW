<?php
    $fecha = date('Y');
    function anioBisiesto($anio){
        if (($anio%4 == 0 && $anio%100 != 0) || $anio%400 == 0){
            echo $anio . 'Es bisiesto.';
        }
        else{
            echo $anio . 'No es bisiesto.';
        }
    }
    echo anioBisiesto($fecha);
?>