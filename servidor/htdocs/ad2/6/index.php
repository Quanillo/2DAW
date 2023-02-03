<?php 

    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];
    $newNombre = $_POST['newNombre'];
    $newMail = $_POST['newMail'];
    
    $usuarios = [];
    //datos de conexión
    $servername = "localhost";
    $username = "testuser";
    $password = "testpassword";
    $dbname = "test";
    // Creamos la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Comprobamos la conexión
    if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
    }

    if($nombre !='' && $newName != '' && $mail == '' && $newMail==''){
        $sql = "UPDATE usuarios SET nombre='$newNombre' WHERE nombre='$nombre'";

    }
    elseif($nombre == '' && $newNombre == '' && $mail =! '' && $newMail=! ''){
        $sql = "UPDATE usuarios SET mail='$newMail' WHERE mail='$mail'";
    }
    elseif($nombre =! '' && $newNombre =! '' && $mail =! '' && $newMail=! ''){
        $sql = "UPDATE usuarios SET mail='$newMail' and nombre='$newNombre' WHERE nombre='$nombre' and mail='$mail'";
    }
    else{
        echo "Upsss... algo salió mal. <br> Introduce los valores correctamente.";
    }

    $conn->query($sql);
    if($conn->errno) die($conn->error);

    $sql2 = "SELECT ID, nombre, mail FROM usuarios";

    $result = $conn->query($sql2);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["ID"]. " - Nombre: " . $row["nombre"]. " - mail: " . $row["mail"]. "<br>";
            }
    } else {
    echo "0 results";
    }
    
    $conn->close();

?>

