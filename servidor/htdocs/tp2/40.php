<?php
    include('funcionesFecha.php');
    $fecha = $miFecha= date('Y');
    if(!anioBisiesto($fecha) && fechaValida($fecha)){
        echo 'La fecha SI ha pasdo el checkdate';
    }
    else{
        echo 'La fecha NO ha pasado el checkdate';
    }
?>