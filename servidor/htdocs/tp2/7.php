<?php

$hoy = time();
$evento = mktime(0,0,0,0,28,2023);
$cuenta = round(($evento - $hoy)/86400);
echo "$cuenta days until the event";

?>