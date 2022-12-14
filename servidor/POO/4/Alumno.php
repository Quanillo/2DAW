<?php 
class Alumno {
	private $nombre;
	private $apellido1;
	private $apellido2;
	private $nif;
    public static $alumnos_totales = 0;

	function __construct($nombre,$apellido1,$apellido2,$nif) {
		$this->nombre = $nombre;
		$this->apellido1 = $apellido1;
		$this->apellido2 = $apellido2;
		$this->nif = $nif;
        Alumno::$alumnos_totales += 1;
	}

    public function __get($prop) {
		if (property_exists($this, $prop)) {
			return $this->$prop;
		}
	}

    public function __set($prop, $value) {
		if (property_exists($this, $prop)) {
			if($prop === 'nif'){
				if(preg_match ('/^[0-9]{8}[A-Z]{1}$/', $value)){
					$this->$prop = $value;
				}
			}
			else{
				$this->$prop = $value;
			}
			
        }

    }

	function pinta_alumno() {
		echo "<p>'$this->nombre'</p>
        <p>'$this->apellido1'</p>
        <p>'$this->apellido2'</p>";
	}
}
?>
