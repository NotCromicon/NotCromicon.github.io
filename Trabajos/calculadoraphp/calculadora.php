<?php
	$numero1 = $_GET['numero1'];
	$numero2 = $_GET['numero2'];
	$operador = $_GET['operador'];
	
	if($operador == "+"){
		$solucion = $numero1 + $numero2;
	}else if($operador == "-"){
		$solucion = $numero1 - $numero2;
	}else if($operador == "*"){
		$solucion = $numero1 * $numero2;
	}else if($operador == "/"){
		$solucion = $numero1 / $numero2;
	}else if($operador == "^"){
		$solucion = $numero1 * $numero1;
	}
	echo "El resultado es: ".$solucion;
?>
		<!-- primero se llaman las variables -->
				<!-- Despues salen los calculos -->