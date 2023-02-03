<?php
    $nombre = $_POST['nombre'];
    $apellidos = $_POST['apellidos'];
    $edad = $_POST['edad'];
    $dni = $_POST['dni'];
    $mail = $_POST['mail'];
    $web = $_POST['web'];
    $gustos = $_POST['gustos'];

    if($edad>0 && $edad<150){
        echo 'Nombre: ' . $nombre . '<br><br>';
        echo 'Apellido: ' . $apellidos. '<br><br>';
        echo 'Edad: ' . $edad. '<br><br>';
        echo 'Dni: ' . $dni. '<br><br>';
        echo 'Mail: ' . $mail. '<br><br>';
        echo 'Web: ' . $web. '<br><br>';
        echo 'Gustos: ' . $gustos. '<br><br>';
    }
    else{
        echo 'La edad introducida no es válida. ' . $edad . ' no es una edad factible.';
    }

?>