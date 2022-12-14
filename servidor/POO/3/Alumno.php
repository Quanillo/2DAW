<?php 
class Alumno {
	public $nombre;
	public $apellido1;
	public $apellido2;
	public $nif;
    public static $alumnos_totales = 0;

	function __construct($nombre,$apellido1,$apellido2,$nif) {
		$this->nombre = $nombre;
		$this->apellido1 = $apellido1;
		$this->apellido2 = $apellido2;
		$this->nif = $nif;
        Alumno::$alumnos_totales += 1;
	}

	function pinta_alumno() {
		echo "<p>'$this->nombre'</p>
        <p>'$this->apellido1'</p>
        <p>'$this->apellido2'</p>
        <p>'$this->nif'</p>";
	}
}
?>
