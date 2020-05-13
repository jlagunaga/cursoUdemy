'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos,
hasta ingresar un numero negativo cuando ocurra esto se mostraran los resultados
 */

var Acumulado = 0;

var contador=0;

do{
    var Numero = parseInt(prompt("Ingrese numero "+ contador,0));
    if(isNaN(Numero)){
        Numero=0;
    }else if(Numero>=0){
        Acumulado=Acumulado +Numero;
        contador++;
    }
}   
while(parseInt(Numero) >=0)
     

 
console.log("Suma de valores: " +Acumulado);
console.log("Promedio acumulado: " +Acumulado/contador);
console.log(contador);


