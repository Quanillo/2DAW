<?php
    
    $emaildominio = "@pruebas.com";
    $email = $_POST["user_mail"];
    if (preg_match("/" . $emaildominio . "$/", $email)){
        echo "Sus datos ingresados: <br><br>";
        echo "Nombre: " . $_POST["user_name"] . "<br>";
        echo "Email: " . $_POST["user_mail"] . "<br>";
        echo "Mensaje: " . $_POST["user_message"] . "<br><br>";
    }
    else
        echo 'Introduzca el dominio adecuado "@pruebas.com"<br><br>';
    
?>

<form action="index.php">
    <input type="button" value="Volver" onclick="history.back()">
    <button type="submit">Inicio</button> 
</form>