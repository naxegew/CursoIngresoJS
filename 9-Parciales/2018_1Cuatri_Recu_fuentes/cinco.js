function mostrar()
{
var dia;


dia = prompt("ingrese un dia de la semana");
//while (dia != 'lunes' && dia != 'martes' && dia != 'miercoles' && dia != 'jueves' && dia != 'viernes' && dia != 'sabado' && dia != 'domingo'){
//    dia = prompt("Error.ingrese un dia de la semana");
//} 
alert("ingreso el dia " + dia); 
switch(dia){    
case 'lunes':
    alert("lunes");
case 'martes':
case 'miercoles':
case 'jueves':
     alert("a trabajar");
      break;
case 'viernes':
case  'sabado':
case 'domingo':  
     alert("buen fin de semana");
     break;
default:
      alert("ingreso un dia de la semana invalido");
     break;

}





}
