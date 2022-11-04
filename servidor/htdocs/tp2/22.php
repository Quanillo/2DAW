<?php

    $sueldoBase = 40000;
    echo 'Sueldo base: ' . $sueldoBase;
    $anios = 10;
    if($anios >= 10){
        $sueldoBase += ($sueldoBase*10/100) ;
    }
    else if($anios <10 && $anios >=5){
        $sueldoBase += ($sueldoBase*7/100) ;
    }
    else if($anios <5 && $anios >=3){
        $sueldoBase += $sueldoBase += ($sueldoBase*5/100) ;
    }
    else{
        $sueldoBase += $sueldoBase += ($sueldoBase*3/100) ;
    }

    echo 'Sueldo con aumento: ' . $sueldoBase;
?>