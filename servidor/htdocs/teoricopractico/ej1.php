

<?php    
    $variableA = "Variable A";
    $variableB = "Variable B";
    $variableC = "";
    echo $variableA . "<br>" . $variableB;

    echo "<br><br>Intercambiamos los valores de las variables<br><br>";

    $variableC = $variableA;
    $variableA = $variableB;
    $variableB = $variableC;

    echo $variableA . "<br>" . $variableB;
?>








