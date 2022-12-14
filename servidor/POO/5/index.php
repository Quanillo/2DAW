<?php 
require_once("Articulo.php");

$articulo1 = new Articulo("Primer Articulo");
$articulo2 = new Articulo("");
$articulo3 = new Articulo("");
$articulo2 = clone $articulo1;
$articulo3 = clone $articulo2;


echo $articulo1->mostrarArticulo();
echo $articulo2->mostrarArticulo();
echo $articulo3->mostrarArticulo();
?>

