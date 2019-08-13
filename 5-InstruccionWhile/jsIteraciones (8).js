function mostrar() {

	var contador = 0;
	var positivo = 0;
	var negativo = 1;
	var numero;

	var respuesta = 'si';

	do {
		numero = parseInt(prompt("ingrese un numero")); //pedis un numero por prompt

		if (numero >= 0) { //si el numero es mayor o igual a 0 es positivo entonces lo sumas
			positivo = positivo += numero; //si es positivo sumas al acumulador de numeros positivos
		} else { //else o sea, sino. el numero va a ser negativo (por que  los numeros son opositivos o negativos
			)
		negativo = negativo * numero;// si es negativo lo multiplicas por el acumulador de numeros negativos
		}
		respuesta = prompt("desea seguir ingresando numeros"); //preguntas si quiere seguir ingresando datos

	} while (respuesta == 'si') //aca termina la parte que se repite mientras la respuesta sea si
	document.getElementById('suma').value = positivo; // muestra el total de la suma de los positivos
	document.getElementById('producto').value = negativo; // muestra el total de las multiplicaciones de negativos

}//FIN DE LA FUNCIÓN