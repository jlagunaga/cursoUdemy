'use strict'
console.log('Java cargado');
var bicicleta = {
    color:'rojo',
    modelo:'bmx',
    frenos:'disco',
    velocidad_maxima:'60km',
    cambiarcolor:function(nuevo_color){
        this.color=nuevo_color;
        console.log(this);
    }
};
bicicleta.cambiarcolor("Verde");

