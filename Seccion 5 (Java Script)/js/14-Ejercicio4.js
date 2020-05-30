'Use strict'

/*
Mostrar todos los numeros impares que hay entre dos numeros introducidos por el usuario
 */

var Numero1 =parseInt(prompt("Numero Inicial: ",0));
var Numero2 =parseInt(prompt("Ultimo numero: ",0));
var Grupo="";

for(var i= Numero1;i<=Numero2;i++){
    if((i%2)>0){
        if(i+1==Numero2){
            Grupo= Grupo+i;
        }else{
            Grupo= Grupo+i+" - ";
        }
    }
}

console.log(Grupo);