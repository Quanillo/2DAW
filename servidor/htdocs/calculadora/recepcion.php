<?php
    
    $num1 = $_POST["num1"];
    $num2 = $_POST["num2"];
    $operacion = $_POST["select"];
    if($operacion == "suma"){
        echo $num1 + $num2;
    }
    elseif($operacion == "resta"){
        echo $num1 - $num2;
    }
    elseif($operacion == "multi"){
        echo $num1 * $num2;
    }
    else{
        echo $num1 / $num2;
    }
?>

<form action="index.php">
    <input type="button" value="Volver" onclick="history.back()">
    <button type="submit">Inicio</button> 
</form>