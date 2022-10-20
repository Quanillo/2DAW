<?php

    $date = "2009-11-23";

    echo $date;

    echo "<br>";

    $mes1 = date("M - Y", strtotime ( '-1 month' , strtotime ( $date ) )) ;
    $mes2 = date("M - Y", strtotime ( '-2 month' , strtotime ( $date ) )) ;
    $mes3 = date("M - Y", strtotime ( '-3 month' , strtotime ( $date ) )) ;

    echo $mes1;
    echo "<br>";
    echo $mes2;
    echo "<br>";
    echo $mes3;

?>