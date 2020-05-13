'use strict'
/*
Ques nos diga si es un numero par o impar
1. Ventana Prompt
2. si no es valid que lo pida de uevo 
 */

 var numero = parseInt(prompt("Ingrese numero ",0));

 while(isNaN(numero) || numero<=0){
    numero = parseInt(prompt("Ingrese numero ",0));
 }
 if ((numero%2)==0){
    console.log("el numero " + numero + " es par");
 }else{
    console.log("el numero " + numero + " es impar");
 }

 