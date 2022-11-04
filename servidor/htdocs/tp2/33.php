<?php
    $num = 4;
    $total = 0;
    for($i=1; $i<$num+1; $i++){
        $total+=$i;
        echo $i . '+';
    }
    echo '='.$total;
?>