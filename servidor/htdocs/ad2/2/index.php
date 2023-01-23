<?php 
require_once("Alumno.php");

    $nombre = $_POST['nombre'];
    $primer_apellido = $_POST['primer_apellido'];
    $segundo_apellido = $_POST['segundo_apellido'];
    $dni = $_POST['dni'];

    $alumnos = [];
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

    $sql = "INSERT INTO alumnos (nombre, primer_apellido, segundo_apellido, dni) VALUES ('$nombre', '$primer_apellido', '$segundo_apellido', '$dni')";

    if ($conn->query($sql) == TRUE) {
        echo "New record created successfully <br>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error . "<br>";
    }

    $sql2 = "SELECT nombre, primer_apellido, segundo_apellido, dni FROM alumnos";

    $result = $conn->query($sql2);
    
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            array_push($alumnos, new Alumno($row["nombre"], $row["primer_apellido"], $row["segundo_apellido"], $row["dni"]));
        }
    } else {
    echo "0 results";
    }

    echo "Listado de alumnos <br><br><br>"
    foreach ($alumnos as &$alumno) {
        echo $alumno->pinta_alumno();
    }

    
    $conn->close();

?>

