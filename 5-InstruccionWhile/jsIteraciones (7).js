function mostrar() {

	var contador = 0;
	var acumulador = 0;
	var respuesta;



	do {                       // El "do while"siempre empieza ejecutando el codigo 
		acumulador += parseInt(prompt("ingrese numero a sumar:")); // pide la suma	
		while (isNaN(acumulador)) { //cuando acumulador es distinto(!) que NaN
			acumulador += parseInt(prompt("Error.ingrese numero a sumar:")); // pide la suma de nuevo
		}

		respuesta = prompt("Desea seguir sumando?"); //pregunta si quiere seguir sumando
		while (respuesta != 'si' && respuesta != 'no') { //Cuando respuesta es distinto que si y que no
			respuesta = prompt("Error.Desea seguir sumando?"); //pregunta si quiere seguir sumando denuevo
		}
		contador++                    //suma +1 al contador para saber por cuanto tiene que dividir para el promedio
	} while (respuesta == 'si');   //esta es la condicion, si pone algo que no sea si sale del while (como solo puede poner no, como lo pide en la linea 16) 


	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN