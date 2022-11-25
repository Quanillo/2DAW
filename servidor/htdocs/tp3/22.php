<?php

    $texto = "Hola Mundo! Probando el ejercicio 22 de php";
    
    $cA = 0;
    $cE = 0;
    $cI = 0;
    $cO = 0;
    $cU = 0;

    for($i=0;$i<strlen($texto);$i++){
        if($texto[$i]=="a" || $texto[$i]=="A"){
            $cA++;
        }
        elseif($texto[$i]=="e" || $texto[$i]=="E"){
            $cE++;
        }
        elseif($texto[$i]=="i" || $texto[$i]=="I"){
            $cI++;
        }
        elseif($texto[$i]=="o" || $texto[$i]=="O"){
            $cO++;
        }
        elseif($texto[$i]=="u" || $texto[$i]=="U"){
            $cU++;
        }
    }
    echo $texto."<br>";
    echo "Encontradas ". $cA ." aes<br>";
    echo "Encontradas ". $cE. " es<br>";
    echo "Encontradas ". $cI ." ies<br>";
    echo "Encontradas ". $cO ." oes<br>";
    echo "Encontradas ". $cU ." ues<br>";

?>