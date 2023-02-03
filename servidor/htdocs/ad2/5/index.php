<?php 

    $nombre = $_POST['nombre'];
    $mail = $_POST['mail'];

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

    if($nombre == '' && $mail == ''){
        $sql = "SELECT * FROM usuarios";
        $result = $conn->query($sql);
    }
    elseif($nombre != '' && $mail == ''){
        $sql = "SELECT * FROM usuarios WHERE nombre='$nombre'";
        $result = $conn->query($sql);
    }
    elseif($nombre == '' && $mail != ''){
        $sql = "SELECT * FROM usuarios WHERE mail='$mail'";
        $result = $conn->query($sql);
    }
    else{
        $sql = "SELECT * FROM usuarios WHERE nombre='$nombre' AND mail='$mail'";
        $result = $conn->query($sql);
    }
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            echo "ID: " . $row["ID"]. " - Nombre: " . $row["nombre"]. " - mail: " . $row["mail"]. "<br>";
            }
    } else {
    echo "0 results";
    }
    $result->free();
    $conn->close();

?>

