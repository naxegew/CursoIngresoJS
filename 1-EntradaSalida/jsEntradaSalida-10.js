/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
var importe  =parseFloat(document.getElementById("importe").value);
/*var sueldo  =parseInt(document.getElementById("importe").value);*/
var descuento = importe * 0.25;
var resultado;
/*resultado = sueldo * 1.1;*/
 resultado = importe -  descuento;
 document.getElementById("resultado").value = resultado;
}
