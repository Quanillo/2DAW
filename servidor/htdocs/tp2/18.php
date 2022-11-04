
<meta charset='utf-8'>
<?php
    function fechaCastellano(){
        setlocale(LC_TIME, 'es_VE.UTF-8','esp');
        $miFecha= date('l');
        echo strftime("%A, %d de %B del %Y");
    }

    fechaCastellano();
?>