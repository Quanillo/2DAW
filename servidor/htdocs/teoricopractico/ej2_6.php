<?php
$arr = explode("/", $_SERVER['SCRIPT_NAME']);
$documento = $arr[sizeof($arr)-1];
echo "Documento - ".$documento. "<br><br>";

$archivo = fopen ($documento, "r"); 
$num_lineas = 0; 
while (!feof ($archivo)) {
    if ($linea = fgets($archivo)){
       $num_lineas++;
    }
}
fclose ($archivo);
echo "
Líneas: " . $num_lineas; 
?>