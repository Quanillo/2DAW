<?php
    $sumaPar = 0;
    $prodImpar = 1;

    for($i=0; $i<20; $i++){
        $n=rand(1, 10);
        if($n % 2 == 0){
            $sumaPar += $n;
        }  
        else{
            $prodImpar=$prodImpar*$n;
        }   
    }
    echo 'Suma pares: ' . $sumaPar . ' producto impares: ' . $prodImpar;
?>