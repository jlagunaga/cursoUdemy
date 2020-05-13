'use strict'

// switch

var edad = 75;
var imprime = "";

switch(edad){
    case 18:
        imprime="Acabas de cumplir la mayoria de edad";
        break;
    case 25:
            imprime="Eres un adulto";
            break;
    case 40:
        imprime="Crisis de los 50";
        break;
    case 75:
        imprime="Eres un anciano";
        break;
    default:
        imprime="tu edad es promedio";
        break;
}
console.log(imprime);