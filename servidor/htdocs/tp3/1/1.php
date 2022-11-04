<?php

    $nombre = $_GET['nombre'];
    $apellidos = $_GET['apellidos'];
    $edad = $_GET['edad'];
    $dni = $_GET['dni'];
    $mail = $_GET['mail'];
    $sugerencia = $_GET['sugerencia'];

    echo 'Hola, ' . $nombre . ' recepción del formulario válida.<br>';
    echo 'Estos son tus datos:<br><br>';
    echo 'Nombre: ' . $nombre . '<br><br>';
    echo 'Apellido: ' . $apellidos. '<br><br>';
    echo 'Edad: ' . $edad. '<br><br>';
    echo 'Dni: ' . $dni. '<br><br>';
    echo 'Mail: ' . $mail. '<br><br>';
    echo 'Sugerencias: ' . $sugerencia. '<br><br>';

?>