function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;
	var respuesta = 'si';

	do {
		numero = parseInt(prompt("ingrese un numero: "));

		while (isNaN(numero)) {
			numero = parseInt(prompt("Error no ingreso un numero. Ingrese un Numero."));
		}

		if (numero >= 0) {
			positivo += numero;

		}
		else {
			negativo = negativo * numero;
		}
		respuesta = prompt("quiere seguir ingresando numeros('si o 'no')")
	} while (respuesta == 'si');


	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN