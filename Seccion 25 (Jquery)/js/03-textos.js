'use strict'
$(document).ready(function () {
    console.log('jquery ready');
    cargarLista();

    var link=$('#addLink');
    $('#addButon').click(function (e) { 
        $('#lista').prepend('<li><a href="' +link.val()+ '"></li>');
        //$('#lista').append('<li><a href="' +link.val()+ '"></li>');
        cargarLista();
        link.val("").focus();
    });



}); // on load 

function cargarLista() {
    $('a').each(function (index) {
        // "attr" recoje el valor de un atributo o agregar un nuevo atribut al alemento HTML
        $(this).text($(this).attr('href')); // recoje el valor del atributo
        $(this).attr('target','_blank'); // agrega un atributo y ingresa el atributo
        console.log($(this).attr('href'));

    });

}