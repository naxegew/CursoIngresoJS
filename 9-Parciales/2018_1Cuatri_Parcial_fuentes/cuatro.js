function mostrar() {
    var num1;
    var num2;
    var suma;

    num1 = parseInt(prompt("ingrese el 1er numero"));
    num2 = parseInt(prompt("ingrese el 2do numero"));

    if (num1 == num2) {
        alert("los numeros ingresados son: " + num1 + num2);
    } else if (num1 > num2) {
        alert("la resta del primer numero y el segundo es " + (num1 - num2));
    } else if (num1 < num2) {
        suma = num1 + num2;
        if (suma > 10){
            alert("la suma es "+ suma + " y supero el 10")
        }
            alert("la suma de los dos numeros ingresados es " + suma);
    }
}
