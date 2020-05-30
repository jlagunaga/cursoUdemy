'use strict'

// Funciones anonimas 
// son funciones que no tienen nombre 

var prueba=function(){
    return "esta es una funcion Anonima";
}

// callback

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
    var sumar=numero1+numero2;
    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

// funcion callback
sumame(5,7,function(dato){
    console.log("el valor sumado es",dato);
    },
    // funcion de flecha se usa en callback con el signo(=>) 
    (dato)=>{
        console.log("el por dos es:",(dato*2));
    }
);