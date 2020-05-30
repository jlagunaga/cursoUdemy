'use strict'

var numero=parseInt(prompt("Ingrese numero",0));
var group="";

console.log("El numero elegido es " + numero);

for(var i=0;i<=numero;i++){
    if ((numero%i)==0){
        console.log(i + " Es divisor de "+numero);
    }
}
