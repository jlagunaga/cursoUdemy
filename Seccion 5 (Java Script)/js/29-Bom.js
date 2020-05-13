'use strict'
/**
 * BOM - Browser Object Model  
 */

 function getBom(){

    console.log(screen.width); // obtiene el ancho de la ventana
    console.log(screen.height); // obtiene el alto de la ventana
    console.log(window.location); // devuelve los de la ubicaion de la pagina
 }

 function redireccionar(url){
    window.location.href=url;
 }

function abrirVentana(url){
    window.open(url,"","width=30,heigth=70");
}
