<?php

$date = new DateTime("now", new DateTimeZone('America/Los_Angeles') );
echo "Los Angeles  -  " . $date->format('Y/m/d H:i:s');

?>