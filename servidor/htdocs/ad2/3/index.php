<?php
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

    $sql = "CREATE TABLE usuarios
                            (ID INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                            nombre VARCHAR(50) NOT NULL,
                            mail varchar(100) NOT NULL)
                            ENGINE=InnoDB";
    $conn->query($sql);
    if($conn->errno) die($conn->error);

?>