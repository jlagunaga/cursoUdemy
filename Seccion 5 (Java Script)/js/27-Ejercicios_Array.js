'use strict'

/*
1. pedir 6 numeros por pantalla y se ingresen en array.
2. Mostrar todos los elementos de array en e cuerpo de la pagina y consola 
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga si lo encuentra y su indice 
(se valorara el uso de funciones)
 */

var ObjArray=new Array();
 for(var i = 0;i<6;i++){
    ObjArray.push(prompt("Ingrese valor "+(i+1)+" :"));
 }


 document.write("<h3>trabajando con Array - Ejercicio con: "+ObjArray.length+"</h3>");

 Imprimir_Ordenado(true);

 document.write("<h3>Array -Reversa con: "+ObjArray.length+"</h3>");

 Imprimir_Ordenado(false);

function Imprimir_Ordenado(ordenado=false){
    (ordenado)?ObjArray.sort():ObjArray.reverse;

    for(let index in ObjArray){
        
        document.write(
           `
           <li> ${ObjArray[index]} </li>
           `
       );
    }
}

function buscar_pro(valor_busqueda){
    document.write("</br>Valor de busqueda: "+ObjArray.find(pal=>pal==valor_busqueda));
}

var  mensaje = prompt("Ingrese valor a buscar");
buscar_pro(mensaje);
 
console.log(ObjArray);
