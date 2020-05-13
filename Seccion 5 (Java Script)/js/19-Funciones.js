'use strict'


function calcular_suma(numero1, numero2){
return numero1 + numero2;
}

function calcular_multiplicacion(numero1,numero2){
return numero1*numero2;
}

// "en web=false" parametro opconal q tiene un valor por defecto
function imprimir_web(numero1,numero2,En_Web=false){
    if(En_Web){
        document.write("<h4>Resultado de Suma : "+calcular_suma(numero1,numero2)+" </h4>");
        document.write("<h4>Resultado de Multiplicar :"+calcular_multiplicacion(numero1,numero2)+" </h4>");
    }else{
        console.log("Resultado de Suma : "+calcular_suma(numero1,numero2));
        console.log("Resultado de Multiplicar : "+calcular_multiplicacion(numero1,numero2));
    }
}

imprimir_web(1,3,true);
