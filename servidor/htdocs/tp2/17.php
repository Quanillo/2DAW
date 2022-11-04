<?php

    $time = date('l'); 
    echo $time; 

    if($time == 'Saturday' || $time == 'Sunday'){
        echo " SI es fin de semana. ";
    }
    else{
        $timeNum = date ('N');
        echo " NO es fin de semana. ";
        $diff = 6-intval($timeNum);
        echo "Faltan " . $diff . " dias.";
    }


?>
