/*3. Se requiere un algoritmo para obtener la estatura promedio de un grupo de personas, cuyo número de miembros se desconoce, el ciclo debe efectuarse siempre y cuando se tenga una estatura registrada.*/

let estatura = 0;
let contarPersonas = 0;
let sumaEstatura = 0;

do{
   estatura = parseInt (prompt("Ingresar estatura de la persona: "+contarPersonas)); 
   //Se valida que el valor que se captura sea un número mayor a cero y que no sea una letra.
   //Si no cumple alguno de estos requisitos no se acumula ni se cuenta el usuario
   if(estatura>0){
      sumaEstatura += estatura;
      contarPersonas ++;
   }
 }while(estatura>0);

 document.writeln("El promedio de estatura es: "+ (sumaEstatura/contarPersonas));