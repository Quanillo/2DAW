<?php

    $ciudades = [
        "Madrid" => 3230000,
        "Paris" => 3650000,
        "Londres" => 8982000
    ];

    function ciudadMasHab ($array){
        $masPoblada = '';
        $maxNumHab = 0;
        foreach ($array as $ciudad => $numHab){
            if($numHab > $maxNumHab){
                $maxNumHab = $numHab;
                $masPoblada = $ciudad;
            }
        }
        return 'Ciudad: ' . $masPoblada . '<br> Numero de habitantes: ' . $numHab; 
    }

    echo ciudadMasHab($ciudades);
    
?>