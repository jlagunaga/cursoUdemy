'use strict'
/*
 Calculadora:
 - pida dos numeros en pantalla 
 - si se ingres un numero equivocado, solicitar de nuevo
 - se debe mostrar en el cuerpo de la pagina, una alerta y en la consola 
 - mostrar el resultado de suma, resta, multiplicar y dividir 
 */

 var numero1= parseInt(prompt("Imgrese numero 1",0));
 var numero2= parseInt(prompt("Imgrese numero 2",0));

 var resultadoweb = "<h1> calculo de "+numero1+" y "+numero2+"</h1>"
                +numero1+" + " +numero2+" = "+ (numero1+numero2) +"</br>"
                +numero1+" - " +numero2+" = "+(numero1-numero2) +"</br>"
                +numero1+" x " +numero2+" = "+(numero1*numero2) +"</br>"
                +numero1+" / " +numero2+" = "+(numero1/numero2) +"</br>"; 

var resultadoAlert= "la suma es= " + (numero1+numero2)+ " \n"+
                    "la resta es= " + (numero1-numero2)+ " \n"+
                    "la multiplicacion es= " + (numero1*numero2)+ " \n"+
                    "la division es= " + (numero1/numero2);

document.write(resultadoweb);
alert(resultadoAlert);
console.log(resultadoAlert);



 /* document.write("<h1> calculo de "+numero1+" y "+numero2+"</h1>");
 document.write( numero1+" + " +numero2+" = "+numero1+numero2 +"</br>");
 document.write( numero1+" - " +numero2+" = "+numero1-numero2 +"</br>");
 document.write( numero1+" x " +numero2+" = "+numero1*numero2 +"</br>");
 document.write( numero1+" / " +numero2+" = "+numero1/numero2 +"</br>"); */

 