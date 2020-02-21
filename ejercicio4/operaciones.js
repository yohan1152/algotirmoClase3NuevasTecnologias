/*4. Se requiere un algoritmo para determinar, de N cantidades, cuántas son menores o iguales a cero y cuántas mayores a cero.*/

let cantidad = 0;
let iteraciones = 0;
let contarMayor = 0;
let contarMenorIgual = 0;

iteraciones = parseInt (prompt("Cuántas cantidades desea ingresar ?"));

for(i=0;i<iteraciones;i++){
   cantidad = parseInt (prompt("Ingresar cantidad: "));
   if(cantidad>0){
      contarMayor++;
   }else{
      contarMenorIgual++;
   }
}

document.writeln("El total de cantidades mayores a cero es: "+ contarMayor+"<br>");
document.writeln("El total de cantidades menores o iguales a cero es: "+ contarMenorIgual);