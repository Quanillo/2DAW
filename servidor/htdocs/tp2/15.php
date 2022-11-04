<?php
    $palabra1 = 'level';
    $palabra2 = 'random';


    function palindromo ($palindromo)
{
    if($palindromo == strrev($palindromo)){
        return $palindromo . " es un palindromo <br>";
    }
    else{
        return $palindromo . " no es un palindromo <br>";
    }
}


echo palindromo($palabra1);
echo palindromo($palabra2);


?>