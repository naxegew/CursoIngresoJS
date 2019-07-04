/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
var num1 = parseInt(document.getElementById("numeroUno").value);
var num2 = parseInt(document.getElementById("numeroDos").value);
var suma = num1 + num2;
alert("el resultado de la suma es: "+ suma);
	
}

function restar()
{
var num1 = parseInt(document.getElementById("numeroUno").value);
var num2 = parseInt(document.getElementById("numeroDos").value);
var resta = num1 - num2;
alert("el resultado de la resta es: "+ resta);
}

function multiplicar()
{ 
var num1 = parseInt(document.getElementById("numeroUno").value);
var num2 = parseInt(document.getElementById("numeroDos").value);
var multiplicacion = num1 * num2;
alert("el resultado de la multiplicacion es: "+ multiplicacion);
}

function dividir()
{
var num1 = parseInt(document.getElementById("numeroUno").value);
var num2 = parseInt(document.getElementById("numeroDos").value);
var division = num1 / num2;
alert("el resultado de la division es: "+ division);
}

