<?php

    $texto = "Hola Mundo! Probando el ejercicio 23 de php";
    function contVocal($texto){   
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
        $arrVocales = array (
            "A" => $cA, 
            "E" => $cE,
            "I" => $cI,
            "O" => $cO,
            "U" => $cU
            );
        return $arrVocales;
    }

    echo $texto . '<br>';

    foreach (contVocal($texto) as $item => $value){
        echo $item.": ".$value."<br>";
    }
?>