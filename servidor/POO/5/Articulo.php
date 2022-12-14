<?php 
class Articulo {
	private $id;
	private $nombre;
    public static $articulos_totales = 0;

	function __construct($nombre) {
        if ($nombre) {
			Articulo::$articulos_totales += 1;
            $this->id = Articulo::$articulos_totales;
            $this->nombre = $nombre;
	
		}
        else{
            $this->id = Articulo::$articulos_totales;
            $this->nombre = $nombre;
        }

	}

    public function __get($prop) {
		if (property_exists($this, $prop)) {
			return $this->$prop;
		}
	}

    public function __set($prop, $value) {
		if (property_exists($this, $prop)) {
			$this->$prop = $value;
        }
    }

    public function __clone() {
        $this->articulo = $this->id +1;
        $this->id = Articulo::$articulos_totales+1;
    }

	function mostrarArticulo() {
		echo "<p>'$this->id'</p>
        <p>'$this->nombre'</p>";
	}
}
?>
