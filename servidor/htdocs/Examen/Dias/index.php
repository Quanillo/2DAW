<?php

$d_actual = date("Y/n/j");
$d_fin = date_create("2022-12-31");
$d_fin = date_format($d_fin,"Y/m/d");

echo $d_fin;


$diferencia = date_diff($d_actual, $d_fin)->format('%y años, %m meses y %d dias');

echo $diferencia;


?>