<?php

    echo "Numeros random: <br>";
    $num1 = rand();
    $num2 = rand();
    $num3 = rand();
    $num4 = rand();
    echo $num1 . "<br>" . $num2 . "<br>" . $num3 . "<br>" . $num4 . "<br>";
    $arrayRandom = [$num1, $num2, $num3, $num4];


    echo "El número mayor generado es: " . max($arrayRandom);
    echo "<br>";
    echo "El número menor generado es: " . min($arrayRandom);
    echo "<br>";
        
?>