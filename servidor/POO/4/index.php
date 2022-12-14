<?php 
require_once("Alumno.php");

$alumno1 = new Alumno("Pepe", "Peperson", "Pepinez", "12345678P");
$alumno2 = new Alumno("Paco", "Pacorson", "Paquinez", "12345678P");
$alumno3 = new Alumno("Koke", "Kokenson", "Kokinez", "12345678P");

echo "Alumnos totales: " . Alumno::$alumnos_totales; 
echo $alumno1->pinta_alumno();
echo $alumno1->nif;
echo $alumno2->pinta_alumno();
echo $alumno2->nif;
$alumno3->nif = '87654321K';
echo $alumno3->pinta_alumno();
echo $alumno3->nif;
?>

