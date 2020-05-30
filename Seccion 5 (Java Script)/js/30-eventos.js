'use strict'

window.addEventListener("load", function () {

    var boton = document.querySelector("#btnPrueba");

    function cambiarColorBtn() {
        var bt = boton.style.background;

        if (bt == "yellow") {
            boton.style.background = "green";
            console.log()
        } else {
            boton.style.background = "yellow";
        }
        boton.style.width = "100px"
        boton.style.height = "50px"
    }

    /**
     * evento de mouse
     */

    // evento click 
    boton.addEventListener('click', function () {
        cambiarColorBtn(boton.style.background);
    });


    // evento mouse over
    boton.addEventListener("mouseover", function () {
        boton.style.background = "#bf360c";
    });

    // evento mouse out
    boton.addEventListener("mouseout", function () {
        boton.style.background = "#455a64";
    });

    /**
     *  Eventos de Teclado
     */

    var txtNombre = document.querySelector("#txtNombre");

    // Evento Focus 
    txtNombre.addEventListener("focus", function () {
        console.log("[focus] caja de texto tiene el focus");
    });

    // Evento blur
    txtNombre.addEventListener("blur", function () {
        console.log("[Blur] caja de salio del foco");
    });

    // Evento keypress 
    txtNombre.addEventListener("keypress", function (valor) {
        console.log("[keypress] se seleccionada: " + String.fromCharCode(valor.keyCode));
    });

    // Evento Keydown 
    txtNombre.addEventListener("keydown", function (valor) {
        console.log("[keydown] se presiono tecla: " + String.fromCharCode(valor.keyCode));
    });

    // Evento KeyUp 
    txtNombre.addEventListener("keyup", function (valor) {
        console.log("[keyup] se a soltado la tecla: " + String.fromCharCode(valor.keyCode));
    });


});