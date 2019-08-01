function mostrar()
{
var precio = parseInt(prompt("ingrese el precio: "));
var descuento = parseInt(prompt("ingrese el porcentaje de descuento"));
var precioFinal = (precio -(precio * descuento)/100 );
document.getElementById("elPrecioFinal").value = precioFinal;
}
