/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo  =parseFloat(document.getElementById("sueldo").value);
/*var sueldo  =parseInt(document.getElementById("sueldo").value);*/
var aumento = 0.1;
var resultado;
/*resultado = sueldo * 1.1;*/
 resultado = sueldo + (sueldo*aumento);
document.getElementById("resultado").value = resultado;

	
}
