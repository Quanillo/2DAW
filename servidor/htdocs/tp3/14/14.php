<?php
        if(isset($_POST['listaNotas'])){
        $sumaNotas = 0;
        $media = 0;
        $contador=0;
        foreach($_POST['listaNotas'] as $nota) {
            echo $nota . "<br>";
            $sumaNotas+=$nota;
            $contador++;
        }
        $media = $sumaNotas/$contador;
        echo "<br>La media de las notas es ".$media;
    }
    ?>