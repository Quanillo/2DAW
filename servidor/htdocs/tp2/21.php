<?php
     $time = date('H:i:s');
     $time2 =  strtotime ( '+10 second' , strtotime ( $time ) );
     echo 'Hora actual: ' . $time . ', Hora dentro de 10 segundos: ' . date ( 'H:i:s' , $time2); 
?>