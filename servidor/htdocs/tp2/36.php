<?php
    $matriz = array(
        array(11, 12, 13, 14),
        array(21, 22, 23, 24),
        array(31, 32, 33, 34),
        array(41, 42, 43, 44),
    );
    
    foreach($matriz as $fila) {
        foreach ($fila as $elemento) {
            echo " $elemento ";
        }
    
        echo "<br>";
    }
?>