'use strict'
window.addEventListener("load", () => {
    //*************** local storage **************

    //  comprobar de disponibilidad de localstorage
    if (typeof (localStorage) != "undifined") {
        console.log("Local Storage disponible");
    } else {
        console.log("Local Storage disponible");
    }

    // guardar datos
    localStorage.setItem("titulo","curso de java script tomado por Jseph Laguna");

    // recuperar datos 
    document.querySelector("#boxPeliculas").innerHTML= localStorage.getItem("titulo");

    // guardar objetos 

    var usuario={
        nombre:"joseph Laguna",
        email:"jlagunaga@atento.com.pe",
        web:"lacagada@soyYo.com"
    }

    localStorage.setItem("usuario",JSON.stringify(usuario));

    // recuperar objeto de localstorage

    var objJson= JSON.parse(localStorage.getItem("usuario"));
    console.log(objJson);
 
    // eliminar objeto de local storage
    localStorage.removeItem("usuario");

    // eliminar todos los objetos del local storage
    localStorage.clear;
    

});