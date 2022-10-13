<?php

$ip_user = $_SERVER['REMOTE_ADDR'];
echo "IP usuario - ".$ip_user;

echo "<br><br>";
$ip_server = $_SERVER['SERVER_ADDR'];
echo "IP servidor - ".$ip_server;

echo "<br><br>";


$arr = explode("/", $_SERVER['SCRIPT_NAME']);
$documento = $arr[sizeof($arr)-1];

echo $longitud;
echo "Documento - ".$documento;

?>