'use strict'

window.addEventListener("load", function () {

    //timer
    // var tiempo = setTimeout(function () {   ---->> setTimeOut solo se ejecuta una ves 
    var tiempo = this.setInterval(function () {
        console.log("texto desde intervalo");
    }, 1000) // tiempo expresado en segudos

    var btnstop= document.querySelector("#btnStop");
    btnstop.addEventListener("click",()=>{
        alert("has detenido el intervalo");
        this.clearInterval(tiempo);
    });


});