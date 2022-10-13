<?php

$url = 'http://www.example.com/redirecting_page.php';

$protocolo = $_SERVER['SERVER_PROTOCOL'];

echo "Protocolo - ".$protocolo;
echo "<br><br>";

$host = $_SERVER['SERVER_NAME'];

echo "Nombre del host - ".$host;
echo "<br><br>";

$path = $_SERVER['PHP_SELF'];

echo "Path de la página - ".$path;

?>