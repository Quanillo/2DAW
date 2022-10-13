
<?php

$user_agent = $_SERVER['HTTP_USER_AGENT'];
$browser = "";




 if(strpos($user_agent, 'Firefox') !== FALSE)
    $browser = 'Mozilla Firefox';
 elseif(strpos($user_agent, 'Chrome') !== FALSE)
    $browser = 'Google Chrome';
 elseif(strpos($user_agent, 'Safari') !== FALSE)
    $browser = "Safari";
 else
    $browser = 'No hemos podido detectar su navegador';

echo $browser;


?>
