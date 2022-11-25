<?php

    $num = $_GET['num'];

    for($i = 0; $i<$num; $i ++){
        for($j = 0; $j<($num*2)-1; $j ++){
            echo $i . '<br>';
        }
        
    }
    

?>