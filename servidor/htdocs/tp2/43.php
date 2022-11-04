<?php

    function numeroArmstrong($number){
        $cont = 0; 
        $num = $number; 
        while($num != 0) 
        { 
            $rem = $num % 10; 
            $cont = $cont + $rem*$rem*$rem; 
            $num = $num / 10; 
        } 
         
        if ($number == $cont)
            return 1;
         
        return 0;   
    }
    $n = 371;
    $n2 = 2015;
    if(numeroArmstrong($n)){
        echo $n . ' SI es un numero amstrong.';
    }
    else{
        echo $n . ' NO es un numero amstrong.';
    }
    echo '<br>';
    if(numeroArmstrong($n2)){
        echo $n2 . ' SI es un numero amstrong.';
    }
    else{
        echo $n2 . ' NO es un numero amstrong.';
    }
?>