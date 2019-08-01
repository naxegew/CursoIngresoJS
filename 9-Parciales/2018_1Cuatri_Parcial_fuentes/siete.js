function mostrar() {
    var nota;
    var notaMax = 0;
    var notaMin = 10;
    var promedio;
    var contador = 1;
    var acumuladorNota = 0;
    var sexoNotaMin;
    var contMMayor6 = 0;
    var sexo;

    while (contador <= 5) {
        nota = parseInt(prompt("ingrese la " + contador + "º nota"));
        while (isNaN(nota) || (nota < 0 || nota >= 11)) {
            nota = prompt("la nota tiene que estar en escala de 0 a 10. Ingrese nota.");
        }

        sexo = prompt("ingrese sexo (m o f): ");
        while (sexo != 'm' && sexo != 'f') {
            sexo = prompt("el sexo debe ser (m o f). Ingrese sexo.");
        }
        if (nota >= 6 && sexo == 'm') {
            contMMayor6++;
        }

        if (nota > notaMax) {
            notaMax = nota;
        }
         if (nota < notaMin) {
            notaMin = nota;
            sexoNotaMin = sexo;
            alert("nome improataa");
        }

        acumuladorNota = nota + acumuladorNota;
        contador++;
    }
    promedio = acumuladorNota / (contador - 1) ;
    alert("a) el promedio de las notas totales es: " + promedio);
    alert("b) la nota mas baja es: " + notaMin + "\n   el sexo es " + sexoNotaMin);
    alert("c) la cantidad de varones con nota mayor a 6 es: " + contMMayor6);
}