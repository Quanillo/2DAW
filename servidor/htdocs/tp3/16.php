<?php

    $arr1 = [1,2,3,4,5];

    function inversoPushPop($arr){
        $resultado = [];
        for($i=0;$i< count($arr); $i++){
            array_push($resultado,array_pop($arr[$i]));
        }
    }

    $arr2 = [1,2,3,4];
    
    function inversoUnshiftShift($arr){
        $resultado = [];
        for($i=0; $i<count($arr) ;$i++){
            array_shift($resultado,array_unshift($arr[$i]));
        }
    }
    echo inversoPushPop($arr1);
    echo "<br>";
    echo inversoUnshiftShift($arr2);
    

?>