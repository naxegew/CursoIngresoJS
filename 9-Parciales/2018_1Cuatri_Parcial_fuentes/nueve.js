function mostrar()
{
var marca;
var peso = 0;
var temperaturaAlm;
var seguir;
var contTemperaturaPar=0;
var prodMasPesado;
var contBajoCero = 0;
var contProductos = 0;
var pesoTotal = 0;
var pesoPromedio;
var pesoMaximo;
var pesoMinimo;
var flag = 0

do{
   
marca = prompt("ingrese Marca de producto");
peso = parseInt(prompt("ingrese el peso del producto"));
    while(peso < 1 || peso > 100 || isNaN(peso)){
    peso = parseInt(prompt("Error, el peso debe estar entre 1 y 100. ingrese el peso del producto"));
    }
        if(flag ==0 ){
            pesoMaximo = peso;
            pesoMinimo = peso
            prodMasPesado = marca;
            flag = 1;
        }
        if(peso > pesoMaximo){  
            pesoMaximo = peso;
            prodMasPesado = marca; 
        }
        else if(peso<pesoMinimo){
            pesoMinimo = peso;
            
        }
    contProductos++;

    pesoTotal = pesoTotal + peso;
    pesoPromedio = pesoTotal / contProductos;

temperaturaAlm = prompt("ingrese temperatura de almacenamiento (-30 a 30)");
    while( temperaturaAlm < -30 || temperaturaAlm > 30 || isNaN(temperaturaAlm)){
    temperaturaAlm = prompt("Error. Reingrese temperatura de almacenamiento (-30 a 30)");
    }
        if(temperaturaAlm%2 == 0  ){
          contTemperaturaPar ++; 
        }
        if(temperaturaAlm<0){
            contBajoCero++;
        }
//-------------------quiere seguir?---------------
seguir = prompt("desea continuar ingresando productos?");
while(seguir != 'si' && seguir != 'no'){
    seguir = prompt("Error, ingrese si o no.Desea continuar ingresando productos?");
}

}while(seguir == 'si');


document.write("a) cantidad de temperaturas pares es:  " + contTemperaturaPar + "<br> b) la marca del producto mas pesado es: " + prodMasPesado + 
"<br>c) la cantidad de productos que se conservan a menos de 0 grados es: "+ contBajoCero + "<br>d) el promedio del peso de todos los productos es: "+ pesoPromedio + 
"<br>f) el peso maximo es: " + pesoMaximo + " y el peso minimo es: " + pesoMinimo);




}
