'use strict'
$(document).ready(() => {
    var rojo = $("#rojo").css("background", "red")
        .css("color", "white");

    var amarillo = $("#amarillo").css("background", "yellow")
        .css("color", "green");
    var verde = $("#verde").css("background", "green")
        .css("color", "white");


    var objClase = $(".zebra");
    objClase.css("border","2px dashed black");
    console.log(objClase);

    $(".sinBorde").click(function(){
        $(this).addClass("zebra_2");
    });
    
    //  selector por etiquetas
    var parrafo=$("p").css('cursor','pointer');
    parrafo.click(function(){
        var esto= $(this);
        if(!esto.hasClass('grande')){
            esto.addClass('grande');
        }else {
            esto.removeClass('grande');
        };
    });

// selectores por atributo
$('[title="google"]').css('background','#3f51b5');
$('[title="google"]').css('color','white');
$('[title="facebook"]').css('background','#1976d2');
$('[title="facebook"]').css('color','white');

// find 
var caja=$('#caja').find('.resaltado');
console.log(caja);

});