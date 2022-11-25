<?php
    $notas = [
        "Lengua" => 5,
        "Matemáticas" => 7,
        "Inglés" => 3
    ];

    $media = 0;

    foreach ($notas as $asignatura => $nota){
        echo 'Asignatura: ' . $asignatura . '  Nota: ' . $nota . '<br>'; 
        $media += $nota;
    }

    echo 'Nota media: ' . $media/3;
?>