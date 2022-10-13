<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<body>
    <h1>
        <?php
            $title = "En esta página veremos ejemplos de pruebas. <br>";
            echo $title;
        ?>
    </h1>
    <p>
        <?php
            
            function dameDatos(){
                echo "Este texto esta escrito mediante una funcion.";
            }
            dameDatos();
        ?>
    </p>
</body>
</html>