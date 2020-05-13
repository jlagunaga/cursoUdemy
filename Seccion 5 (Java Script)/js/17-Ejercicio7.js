'use strict'

//Tabla de multiplicar del numero indicado en la pantalla

var numero = parseInt(prompt("Ingrese numero ",0));

document.write("<h2>Tabla de multiplicar </h2>");
for(var i=1;i<=12;i++){
    document.write(i+" x "+numero+" = " +i*numero + "</br>");
}

// tabla de multiplicar completa

document.write("<h2>Tabla Completa </h2>");
 
for(var i=1;i<=12;i++){
    document.write("<h4>tabla del " + i +" </h4>");
    for(var c=1;c<=12;c++){
        document.write(c+" x "+i+" = " +c*i + "</br>");
    }
} 