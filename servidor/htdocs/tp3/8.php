<?php
    $nums = array();
    for($i = 0; $i<1000; $i++){
        array_push($nums, rand(1, 10));
    }
    function cuenta ($num){
        echo $nums[5];
        $counter = 0;
        for($i = 0; $i<1000; $i++){
            if($nums[$i] === $num){
                echo $num[$i];
                $counter = $counter + 1;
            }
        }
        return $counter;
    }
    echo cuenta(4);
?>      