<?php
   
   $palabra =  $_POST['text'];

    function strReves($text){
        $textReverse = "";
        for($i=strlen($text); $i>=0; $i--){
            $textReverse = $textReverse . $text[$i];
        }
        return $textReverse;
    }

    echo $palabra;

    if(strtoupper($palabra)==strtoupper(strReves($palabra))){
        echo "Es palíndromo";
    }
    else{
        echo "No es palíndromo";
    }
      
?>