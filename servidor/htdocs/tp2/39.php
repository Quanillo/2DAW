<?php
        $fecha = $miFecha= date('Y');
        function fechaValida($anio){
            if ($anio > 2000 ){
                return $anio . ' fecha válida.';
            }
            else{
                return $anio . ' fecha no válida.';
            }
        }
        echo fechaValida($fecha);
        
?>