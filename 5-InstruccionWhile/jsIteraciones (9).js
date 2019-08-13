function mostrar() {

	var contador = 0;
	var numero;
	var numeroMax;
	var numeroMin;
	var flag = 0; //flag es bandera, la bandera sirve para saber si el programa paso por una seccion  de codigo especifica
	var respuesta;

	do {
		numero = parseInt(prompt("ingrese un numero: ")); //pregunta un numero a ingresar.
		while (isNaN(numero)) { //si es Nan(o sea un no numero)
			numero = parseInt(prompt("Error.ingrese un numero: "));	/*vuelve a pedir un numero, mientras(while) 
																	no se ingrese un numero (un NAN) sigue preguntando */
		}
		if(flag == 0){ // si (if) la bandera (flag) es (==) 0 <o sea que no paso todavia por esta seccion de codigo nunca>
			numeroMax = numero; //el numero maximo es el numero ingresado
			numeroMin = numero; //el numero minimo es el numero ingresado
			flag = 1; // al cambiar la bandera a 1, ya no va a volver a entrar a este if. 
		}
		if(numero>numeroMax){ //si el numero ingresado es mayor al numero maximo
			numeroMax = numero; // entonces el numero ingresado es el nuevo numero maximo

		}
		if(numero<numeroMin){ //si el numero ingresado es menor al numero minimo
			numeroMin = numero; //entonces el numero ingresado es el nuevo numero minimo.
		}

		respuesta = prompt("desea seguir ingresando numeros?"); //pregunta si quiere seguir ingresando numeros
		if (respuesta != 'si' || respuesta != 'no') { //valida si lo ingresado es distino a si o no, entra al if
			respuesta = prompt("Error.desea seguir ingresando numeros?"); //si no se ingresa si o no, vuelve a preguntar.
		}
	} while (respuesta == 'si'); //mientras la respuesta es (==) si, vuelve al principio del <do while>.


	document.getElementById("maximo").value = numeroMax; //cambia el valor (o sea el contenido) del textbox con id "maximo" a el valor de la variable numeroMax(numero Maximo)
	document.getElementById("minimo").value = numeroMin;//idem anterior solo que del numero minimo. 

}//FIN DE LA FUNCIÓN