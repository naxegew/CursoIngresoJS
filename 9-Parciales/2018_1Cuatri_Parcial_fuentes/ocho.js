function mostrar() {
    var letra;
    var numero;
    var respuesta;
    var contPares = 0;
    var contInpares = 0;
    var contCeros = 0;
    var promedioNumPositivos;
    var contPositivos = 0;
    var acumPositivos = 0;
    var acumNumNegativos = 0;
    var numMax;
    var letraMax;
    var numMin;
    var letraMin;
    var flag = 0;

    do { //-----ingreso de datos---------//
        letra = prompt("ingrese una letra");
        while (!(isNaN(letra))) {
            letra = prompt("ingrese una letra");
        }
        numero = parseInt(prompt("ingrese un numero entre -100 y 100;"));
        while (numero < -100 || numero > 100 || isNaN(numero)) {
            numero = parseInt(prompt("Error.ingrese un numero entre -100 y 100;"));
        }
        //-operaciones----------//
        //-----cantidad de numeros pares / inpares / 0---------
        if (numero == 0) {
            contCeros++
        }
        if (numero % 2 == 0) {
            contPares++;
        } else {
            contInpares++;
        }
        //--------promedio de todos los numeros positivos ingresados------//
        if (numero > 0) {
            contPositivos++;
            acumPositivos = acumPositivos + numero;
            promedioNumPositivos = acumPositivos / contPositivos;
        }
        //---------suma de todos los numeros negativos-------------//
        if (numero < 0) {
            acumNumNegativos = acumNumNegativos + numero;
        }
        //--------numero y letra del maximo---------
        //----primera vez pone max y minimo al num ingresado---//
        if (flag == 0) {
            numMax = numero;
        }
        if (flag == 0) {
            numMin = numero;
            flag = 1;
        }
        //-----verifica si se agrego un nuevo numero maximo
        if (numero > numMax) {
            numMax = numero;
            letraMax = letra;
        }
        //-----verifica si se agrego un nuevo numero minimo
        if (numero > numMin) {
            numMin = numero;
            letraMin = letra;
        }

        //-------------Quiere seguir ingresando daos?----------//
        respuesta = prompt("desea seguir ingresando datos?");
        while (respuesta != 'si' && respuesta != 'no')
            respuesta = prompt("Error, ingrese si o no. Desea seguir ingresando datos?");
    } while (respuesta == 'si');
    document.write("<br>a)la cantidad de numeros pares es: " + contPares +
        "<br>b)la canidad de numeros inpares es:  " + contInpares +
        "<br>c)la canidad de ceros es: " + contCeros +
        "<br>d) el promedio de todos los numeros positivos es: " + promedioNumPositivos +
        "<br>d) la suma de todos los numeros negativos es: " + acumNumNegativos +
        "<br>d) el numero maximo es: " + numMax + "y su letra es : " + letraMax +
        "<br>   el numero minimo es: " + numMin + "y su letra es : " + letraMin )

}
