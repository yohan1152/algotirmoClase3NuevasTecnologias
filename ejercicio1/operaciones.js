/*1. Se requiere un algoritmo para obtener la edad promedio de un grupo de N alumnos. 
Si algún alumno tiene más de 18 años, se muestra el promedio que se lleva sin contar el alumno de 18 años.
 EL usuario decide si desea cerrar el programa o vuelve a ejecutarlo.*/

 let edad = 0;
 let contarAlumnos = 0;
 let continuar = true;
 let sumaEdad = 0;

 do{
    edad = parseInt(prompt("Ingresar edad alumno: "+contarAlumnos));

    if(edad>18){
        continuar = confirm("El promedio de edad de los "+contarAlumnos+" alumnos es: "+promedio(sumaEdad, contarAlumnos)+". Desea continuar ingresando edades?");
    }else{
        sumaEdad += edad;
        contarAlumnos ++; 
    }
 }while(continuar == true);

 document.writeln("El promedio de edad de los alumnos es: "+ promedio(sumaEdad, contarAlumnos));

 //Función para realizar la operación del promedio de edades 
 function promedio (sumaEdad, contarAlumnos){
    return (sumaEdad/contarAlumnos);
 }