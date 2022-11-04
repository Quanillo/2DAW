<?php
        $fecha = $miFecha= date('Y');

        function anioBisiesto($anio){
            if ($anio > 2000 ){
                return true;
            }
            else{
                return false;
            }
        }

        function fechaValida($anio){
            if (($anio%4 == 0 && $anio%100 != 0) || $anio%400 == 0){
                echo true;
            }
            else{
                echo false;
            }
        }


?>