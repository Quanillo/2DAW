<?php 
require_once("Celda.php");
require_once("Fila.php");
require_once("Tabla.php");

$celda1 = new Celda("middle", "center", "orange", "IES");
$celda2 = new Celda("middle", "center", "red", "Villaverde");
$celda3 = new Celda("middle", "center", "orange", "DAW");
$celda4 = new Celda("middle", "center", "red", "Servidor");
$fila = new Fila([$celda1, $celda2]);
$fila2 = new Fila([$celda3, $celda4]);
$tabla = new Tabla([$fila, $fila2]);


$tabla->pinta_tabla();
?>


