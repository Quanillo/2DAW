<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulario</title>
</head>
<body>
    <h2>Calculadora</h2>
    <form action="recepcion.php" method="post">
      <ul>
        <li>
          <input type="integer" id="num1" name="num1">
        </li>
        <select name="select">
          <option value="suma">+</option>
          <option value="resta" selected>-</option>
          <option value="multi">x</option>
          <option value="div">/</option>
        </select>
        <li>
          <input type="integer" id="num2" name="num2">
        </li>
        <li>
        </li>
        <button type="submit">Enviar</button> 
      </ul>
      
    </form>
    
   


</body>
</html>
