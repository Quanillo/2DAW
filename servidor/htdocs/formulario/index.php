<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <h1>
        <?php 
                print "Welcome to Pruebas Server";
        ?>  
    </h1>
    <p>
        <?php
                $saludo = "Buenas tardes sosios cooperativistas <br>";
                $bienvenida = "Este es el servidor de pruebas de Codigo Perro SL<br>";
                $despedida = "Cierren al salir, gracias.";
                print $saludo;
                print $bienvenida;
                print $despedida;
        ?>
    </p>

   <form action="formulario.php" >
        <p>Acceder al formulario innecesario</p>
        <button type="submit">ir</button> 
    <form>

</body>
    </html>