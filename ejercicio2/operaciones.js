/*2. Se requiere un algoritmo para obtener la suma de diez cantidades mediante la utilización de un ciclo for.*/

 let suma = 0;
 let cantidad = 10;

 for(i=0;i<cantidad;i++){
    suma += parseInt(prompt("Ingresar cantidad a sumar."));
 }

 document.writeln("La suma de las diez cantidades es: "+suma);