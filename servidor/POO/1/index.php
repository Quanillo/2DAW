<?php 
require_once("Celda.php");

$celda1 = new Celda("middle", "center", "orange", "IES");
$celda2 = new Celda("middle", "center", "red", "Villaverde");

echo "<table border='0'><tr>";
$celda1->pinta_celda();
$celda2->pinta_celda();
echo "</tr></table>";	
?>