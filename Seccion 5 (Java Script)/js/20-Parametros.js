'use strict'

// agregando "... resto_frutas" : se indica que los parametros no mapeados ingresaran en un array
function verFrutas(fruta1,fruta2,...resto_frutas){
 console.log("Fruta 1:"+ fruta1);
 console.log("Fruta 2:"+ fruta2);
 console.log(resto_frutas);
}

verFrutas("Nnaranja","Manzana","Platano","Sandia","Papaya","Coco");