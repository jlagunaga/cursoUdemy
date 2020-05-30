'use strict'
// pruebas con let y var
var numero =40;
console.log(numero); // valor 40
if (true){
    var numero =50; 
    console.log(numero);// valor 50
}

console.log(numero); // valor 50


// prueba con Let
var texto="Curso de JS JosephLaguna.Pro";
console.log(texto); // valor js

if(true){
    let texto="Curso de Laravel 5 JosephLaguna.Pro";
    console.log(texto); // valor laravel 5
}

console.log(texto); // valor js