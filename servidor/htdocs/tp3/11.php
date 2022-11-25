<?php

function sumaVectores ($v1, $v2){
    $v = [];
    for($i = 0; $i < 4; $i++){
        array_push($v, $v1[$i] + $v2[$i]);
    }
    return $v;
}

$arr1 = [1, 3, 5, 7];
$arr2 = [2, 4, 6, 8];
$arrSum = sumaVectores($arr1, $arr2);

print_r($arr1);
echo '<br>';
print_r($arr2);
echo '<br>';
print_r($arrSum);

?>