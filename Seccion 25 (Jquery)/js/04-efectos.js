'use strict'
$(document).ready(function () {
console.log("Jquery Cargado");

// iniciamos las variables
var caja=$('#caja');
var btnMostrar=$('#btnMostrar');
var btnOcultar=$('#btnOcultar');
var btnMultiuso=$('#btnMultiuso');

$(btnMostrar).hide();

$(btnMostrar).click(function (e) { 
    //$(caja).show('normal'); // metodo animacion de recojido
    //$(caja).fadeIn('slow'); // metodo animacion de desvanecer
    $(caja).fadeTo('slow',1); // metodo animacion opacidad
    $(btnOcultar).show();
    $(this).hide();
    
});
$(btnOcultar).click(function (e) { 
    $(btnMostrar).show();
    $(this).hide();
    //$(caja).show('normal'); // metodo animacion de recojido
    //$(caja).fadeOut('slow'); // metodo animacion de desvanecer
    $(caja).fadeTo('slow',0); // metodo animacion de opacidad
});

$(btnMultiuso).click(function (e) { 
    //$(caja).toggle('slow'); // cambio simole
    //$(caja).fadeToggle('slow'); // cambio simole
    $(caja).slideToggle('slow'); // cambio simole
    
});

//  Animaciones personalizadas
var btnAnimar=$('#btnAnimar');
$(btnAnimar).click(function (e) { 
    caja.animate({
        marginLeft:'500px',
        fontSize:'30px',
        height: '120px'
    },'slow')
    .animate({
        marginTop:'80px',
        borderRadius:'900px'
    },'slow');
});

    
});// fin de ready