<?php
    $num1 = 6539;
    $num2 = 5;

    function resto($n1, $n2){
        $c = $n1 / $n2;
        $dec = $c - intval($c);
        return $dec * $n2;
    }

    echo resto($num1, $num2);
?>