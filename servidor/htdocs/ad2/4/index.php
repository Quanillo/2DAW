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

    $sql = "INSERT INTO usuarios (nombre, mail) VALUES ('$nombre', '$mail')";

    if ($conn->query($sql) == TRUE) {
        echo "New record created successfully <br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
    }

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

