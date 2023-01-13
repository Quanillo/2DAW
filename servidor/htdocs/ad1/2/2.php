<?php

    $usuario = $_POST['usuario'];
    $pass = $_POST['pass'];
    $fecha = $_POST['fecha'];
    $aux = $_POST['aux'];

    //datos de conexión
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "AccesoUsuarios";
    // Creamos la conexión
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Comprobamos la conexión
    if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
    }
    echo "Conexión correcta"."<br>";

    // Realizamos la consulta SQL para extraer los datos
    $sql = "INSERT INTO usuarios (usuario, pass, fecha, aux) VALUES ('$usuario', '$pass', '$fecha', '$aux');";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully <br>";
      } else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
      }

    $sql2 = "SELECT usuario, pass, fecha FROM usuarios";
    $result = $conn->query($sql2);
    if ($result->num_rows > 0) {
    // mostramos los resultados por filas
    while($row = $result->fetch_assoc()) {
    echo "usuario: " . $row["usuario"]. " - pass: " . $row["pass"]. " -fecha: " .
    $row["fecha"]. "<br>";
    }
    } else {
    echo "0 results";
    }

    echo $result;

    $conn->close();

?>