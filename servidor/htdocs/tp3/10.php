<?php
    $arr1 = [1, 3, 5, 7];
    $arr2 = [2, 4, 6, 8];
    $arrSum = [];

    for($i = 0; $i < 4; $i++){
        array_push($arrSum, $arr1[$i] + $arr2[$i]);
    }

 
    print_r($arr1);
    echo '<br>';
    print_r($arr2);
    echo '<br>';
    print_r($arrSum); 

?>