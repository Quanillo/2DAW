<?php
    $num = 20;
    echo 'Numero: ' . $num;
    echo '<br> Pares anteriores: <br>';
    for($i = $num-1; $i>0; $i--){
        if($i%2==0){
            echo $i . '<br>';
        }
    }
?>