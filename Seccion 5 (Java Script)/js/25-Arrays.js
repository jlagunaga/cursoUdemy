'use strict'

var lenguajes=new Array("Java","Visual Vasic","SQL","PHP","C","C#","Pascal");

// se usa for in para recorrer el array
for(let lengua in lenguajes ){
    document.write(`
    <li>${lenguajes[lengua]} </li>
    `);
}

// buscar en array

var busqueda= lenguajes.find(lengua=> lengua=="SQL");
console.log(busqueda);

// ejemplo 2 
var precios=[10,20,30,50,70,90];

busqueda=precios.some(prec=>prec>80);

console.log(busqueda);