'use strict'
// Dom -> documento objetct model 

var divCaja= document.getElementById("divCaja");

divCaja.innerHTML ="Caja modificada desde java script";
divCaja.style.background="#00897b";
divCaja.style.padding="30px";
divCaja.style.width="400px"; 
divCaja.style.color="white"; 


// obtener todos los las etiquetas tipo "Div"
var todosDiv=document.getElementsByTagName("div"); // devuelve un array con todos los div del html

for(let index in todosDiv){
    if(typeof todosDiv[index].textContent=='string'){
        var parrafo=document.createElement("p");
        var texto=document.createTextNode(todosDiv[index].textContent + " (Modificado)");
        parrafo.append(texto);
        document.querySelector("#miseccion").append(parrafo);
        console.log(parrafo);
    }
}
//console.log(todosDiv);

/**
 * obtener los elementos por su Clase CSS
 */

 var claseVerde=document.getElementsByClassName("verde");

 for(var indx in claseVerde ){
     if(claseVerde[indx].className=="verde"){
        claseVerde[indx].style.background="#26a69a";
        claseVerde[indx].style.width="400px";
        claseVerde[indx].style.color="white";
    }
 }

 var clasePlomo=document.getElementsByClassName("plomo");

 for(var indx in clasePlomo ){
     if(clasePlomo[indx].className=="plomo"){
        clasePlomo[indx].style.background="#757575";
        clasePlomo[indx].style.width="400px";
        clasePlomo[indx].style.color="white";
    }
 }


