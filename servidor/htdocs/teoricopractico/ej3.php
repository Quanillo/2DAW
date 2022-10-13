<?php
    echo "El mensaje hace uso de  <em><b>variables globales</b></em> 
    Mostramos datos con variables
    Este es un comando incorrecto: del c:\*.* ";

    echo "<br><br><br><br>";

    $hola = <<<EOD
    Esto esta
    escrito con
    heredoc
    EOD;

    echo $hola;
?>