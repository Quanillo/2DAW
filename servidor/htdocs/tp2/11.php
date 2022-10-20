<?php

    $date = "2009-11-23";

    echo $date;

    echo "<br>";

    $mes = date("m", strtotime ( '-1 month' , strtotime ( $date ) )) ;

    echo $mes;

?>