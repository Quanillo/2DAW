<?php
    $str = "Hola Mundo!";   

    function strReves($text){
        $textReverse = "";
        for($i=strlen($text); $i>=0; $i--){
            $textReverse = $textReverse . $text[$i];
        }
        return $textReverse;
    }
    echo $str;
    echo strReves($str);

?>