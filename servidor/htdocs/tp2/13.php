<?php

    $date = "2025-9-21";

    echo $date;

    echo "<br>";

    $mes = date("Y-m-d ", strtotime ( '+1 month' , strtotime ( $date ) )) ;

    echo $mes;

?>