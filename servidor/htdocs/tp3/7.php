<?php
    $nums = array();
    for($i = 0; $i<1000; $i++){
        array_push($nums, rand(1, 10));
    }
    for($i = 0; $i<1000; $i++){
        echo $nums[$i] . '<br>';
    }
    
?>