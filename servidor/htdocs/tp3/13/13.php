<?php
    $notas = array (
        $_POST['n1'],
        $_POST['n2'],
        $_POST['n3'],
        $_POST['n4'],
        $_POST['n5'],
        $_POST['n6'],
        $_POST['n7'],
        $_POST['n8'],
        $_POST['n9'],
        $_POST['n10'],);
    $sumaNotas = 0;
    $media = 0;

    for ($i = 0; $i <= count($notas)-1; $i++) {
        echo 'Nota' . $i+1 . ':  ' . $notas[$i] . "<br>";
        $sumaNotas+=$notas[$i];
    }

    $media = $sumaNotas/count($notas);

    echo "<br>La media de las notas es " . $media;

?>