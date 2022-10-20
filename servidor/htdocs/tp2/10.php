<?php
$fecha = "2009-11-23";
$primerDia = date('Y-m-01');
$ultimoDia = date('Y-m-t',strtotime($fecha));

echo $primerDia;
echo "<br>";
echo $ultimoDia;
?>