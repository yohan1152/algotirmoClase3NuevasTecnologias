/*3. Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.*/

 let suma = 0;
 let cantidad = 10;

 for(i=0;i<cantidad;i++){
    suma += parseInt(prompt("Ingresar cantidad a sumar."));
 }

 document.writeln("La suma de las diez cantidades es: "+suma);