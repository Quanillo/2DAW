<?php
    $n1 = $_POST['n1'];
    $n2 = $_POST['n2'];
    
    for ($i = 0; $i < $n2; $i++) {
        for($j = 0; $j < $n1; $j++){
            echo '*';
        }
        echo '<br>';
    }
?>