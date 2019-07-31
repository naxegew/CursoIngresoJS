/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    var cantidad;
    var marca;
    var precio;
    var precioConDescuento;
    var precioFinal = 0;
    var impuesto = 0;
    var flag = 0;

    //---------cantidad de lamparas ingresadas---------
    cantidad = parseInt(document.getElementById("Cantidad").value);

    precio = cantidad * 35;
    marca = document.getElementById("Marca").value;

    switch (cantidad) {
        case 5:
            if (marca == 'ArgentinaLuz') {
                precioFinal = precio * 0.6
            }
            else {
                precioFinal = precio * 0.7;
            }
            break;
        case 4:
            if (marca == 'ArgentinaLuz' || marca == 'FelipeLamparas') {
                precioFinal = precio * 0.75;
            }
            else {
                precioFinal = precio * 0.80;
            }
            break;
        case 3:
            if (marca == 'ArgentinaLuz') {
                precioFinal = precio * 0.85;
            }
            else if (marca == 'FelipeLamparas') {
                precioFinal = precio * 0.9;
            }
            else {
                precioFinal = precio * 0.95;
            }
            break;

        default:
            precioFinal = precio * 0.5;
            break;
    }
    //---------------final del switch---------------------
    if (precioFinal >= 120) {
        impuesto = precioFinal * 0.1;
        precioFinal = precioFinal + impuesto;
        flag = 1;
    }
    if (flag = 1) {
        document.getElementById("precioDescuento").value = "$" + precioFinal + " Usted pago $" + impuesto + " de IIBB.";
    }
    else {
        document.getElementById("precioDescuento").value = "$" + precioFinal + " Usted pago $" + impuesto + " de IIBB.";
    }


}

/*
if (cantidad >= 6) {
    precioFinal = precio * 0.5;
}
else if (cantidad == 5) {
    if (marca == 'ArgentinaLuz') {

        precioFinal = precio * 0.6;
    }
    else {

        preciofinal = precio * 0.7;
    }
}
else if (cantidad == 4) {
    if (marca == 'ArgentinaLuz' || marca == 'FelipeLamparas') {
        precioFinal = precio * 0.75;
    }
    else {
        precioFinal = precio * 0.80;
    }

}
else if (cantidad == 3) {
    if (marca == 'ArgentinaLuz') {
        precioFinal = precio * 0.85;
    }
    else if (marca == 'FelipeLamparas') {
        precioFinal = precio * 0.9;
    }
    else {
        precioFinal = precio * 0.95;
    }
}
if (precioFinal >= 120) {
    impuesto = precioFinal * 0.1;
    precioFinal = precioFinal + impuesto;
    flag = 1;
}
if (flag = 1) {
    document.getElementById("precioDescuento").value = "$" + precioFinal + " Usted pago $" + impuesto + " de IIBB.";
}
else {
    document.getElementById("precioDescuento").value = precioFinal;
}*/
