function mostrar() {
	var numero;
	var respuesta;
	var acumNegativos = 0; //aca se van a acumular los negativos, como es acumulador empieza en 0
	var acumPositivos = 0; //aca se van a ir acumulando los positivos
	var contPositivos = 0; // aca se cuentan los numeros positivos ingresados. Como es contador empieza en 0.
	var contNegativos = 0; //idem anterior pero con negativos.
	var contCeros = 0; 	   //idem anteriores pero con ceros.
	var contPares = 0; 	   //lo mismo pero con pares
	var promPositivos;     // promedio de numeros positivos
	var promNegativos;	   // idem anterior pero ahora negativos
	var difPosNeg;	       // diferencia entre positivos y negativos.

	do {
		numero = parseInt(prompt("ingrese un numero: ")); //pregunta un numero a ingresar.
		while (isNaN(numero)) { //si es Nan(o sea un no numero)
			numero = parseInt(prompt("Error.ingrese un numero: "));	/*vuelve a pedir un numero, mientras(while) 
																	no se ingrese un numero (un NAN) sigue preguntando */
		}
		if (numero < 0) { //si es menor que sero, entonces es un negativo
			contNegativos++; //aumenta el contador de negativos
			acumNegativos = acumNegativos + numero; // acumula el numero negativo
			if (contNegativos > 0){ // hacemos if para evitar dividir por 0

				promNegativos = acumNegativos / contNegativos; //sacamos promedio de numeros negativos dividiendo acumulado con el contador.
			}

		} else if (numero == 0) {
			contCeros++;
		} else if (numero > 0) {
			contPositivos++;
			acumPositivos = acumPositivos += numero;
			if (contPositivos > 0) { //aca hacemos un if para ver si el contPositivos es mayor a 0, para evitar colgar la pc dividiendo por 0.
				promPositivos = acumPositivos / contPositivos; //sacamos el promedio de los positivos
			}
		}

		// diferencia entre positivos y negativos
		 difPosNeg = acumPositivos - acumNegativos ;

		respuesta = prompt("desea seguir ingresando numeros?"); //pregunta si quiere seguir ingresando numeros
		if (respuesta != 'si' || respuesta != 'no') { //valida si lo ingresado es distino a si o no, entra al if
			respuesta = prompt("Error.desea seguir ingresando numeros?"); //si no se ingresa si o no, vuelve a preguntar.
		}
	} while (respuesta == 'si'); //mientras la respuesta es (==) si, vuelve al principio del <do while>.


}//FIN DE LA FUNCIÓN