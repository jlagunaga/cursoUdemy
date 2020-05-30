'use strict'

/*
Programa que pida dos numeros al usuario y que nos diga cual es el mayor, el menor y si sin iguales 
plus: si los valores ingresados no son numericos volver a pedir numeros 
 */

var Numero1 = prompt("Ingrese Numero 1",0);
var Numero2 = prompt("Ingrese Numero 2",0);
var resultado="";

while(Numero1<=0 || isNaN(Numero1) || Numero2<=0 || isNaN(Numero2) ){

    Numero1 = prompt("Ingrese Numero 1",0);
    Numero2 = prompt("Ingrese Numero 2",0);
}


if(Numero1 > Numero2){
    resultado= "El Numero 1: "+Numero1 +" es mayor ";
}else if(Numero1==Numero2){
    resultado= "Ambos numeros son iguales";
}else{
    resultado= "El Numero 2: "+Numero2 + " es mayor";
}


console.log(resultado);


