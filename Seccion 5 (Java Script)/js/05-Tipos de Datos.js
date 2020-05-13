"use strict" // linea para obligar al correcto scripts java

// Operadores

var numero1=22;
var numero2=7;
var resultado= numero1 % numero2; // operador "%" significa resto 
var numeroFalso="23";

alert("El resultado de la operacion es :" + resultado);

// parseo N° 1 
console.log(Number(numeroFalso) + numero2);

// parseo N° 2 
console.log(parseInt(numeroFalso) + numero1);


// tipos de datos (TypeOf indicar el tipo de dato)

console.log(typeof numeroFalso)
console.log(typeof numero1)
