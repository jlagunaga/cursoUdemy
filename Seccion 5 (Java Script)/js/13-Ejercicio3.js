'use strict'

/*
Hacer un programa que muestre todos los numeros entre dos numeros introducidos por el usuario 
 */

 var Numero1 =parseInt(prompt("Numero Inicial: ",0));
 var Numero2 =parseInt(prompt("Ultimo numero: ",0));
 var Grupo="";

 if(!isNaN(Numero1) || !isNaN(Numero2) ){
    for(var i= Numero1+1;i<Numero2;i++){
        if(i+1==Numero2){
            Grupo= Grupo+i;
        }else{
            Grupo= Grupo+i+" - ";
        }
    }
}
console.log(Grupo);
