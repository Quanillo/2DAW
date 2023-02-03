<?php

    $n_empresa = 6;
    $n_ingles = 8;
    $n_despliegue = 5;
    $n_servidor = 8;
    $n_cliente = 8;
    $n_interfaces = 7;

    echo "Nota de Empresa e iniciativa emprendedora: " . $n_empresa . '<br>';
    echo "Nota de Inglés técnico para G.S.: " . $n_ingles . '<br>';
    echo "Nota de Despliegue de aplicaciones web: " . $n_despliegue . '<br>';
    echo "Nota de Desarrollo web en entorno servidor: " . $n_servidor . '<br>';
    echo "Nota de Desarrollo web en entorno cliente: " . $n_cliente . '<br>';
    echo "Nota de Diseño de interfaces web: " . $n_interfaces . '<br><br><br>';

    $n_media = ($n_empresa + $n_ingles + $n_despliegue + $n_servidor + $n_cliente + $n_interfaces)/6;

    echo "Nota media: " . $n_media;

?>