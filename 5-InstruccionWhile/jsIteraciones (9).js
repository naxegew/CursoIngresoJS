function mostrar() {

	var contador = 0;
	// declarar variables

	var respuesta = 'si';
	var numero;
	var numeroMax;
	var numeroMin;
	var flag = 0;

	do {
		numero = parseInt(prompt("ingrese un numero"));

		if (numero > numeroMax || flag == 0) {
			numeroMax = numero;


		}
		if (numero < numeroMin || flag == 0) {
			numeroMin = numero;
		}


		respuesta = prompt("desea seguir ingresand numeros(si/no): ");

	} while (respuesta == 'si');




}//FIN DE LA FUNCIÓN