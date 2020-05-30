'use strict'
$(document).ready(function () {
    console.log("JQuery listo");
    var elemento = $('.elemento');
    var Lista = $('.listaSel');

    //  elemento dragable ... mueve elemento por la pagina 
    elemento.draggable();

    //  elemento resisable ... cambia tamaño
    elemento.resizable();

    //seleccionar elementos 
    //Lista.selectable();

    //Listar y ordenar
    Lista.sortable({
        update: function (event, ui) {
            console.log('ha cambiado la lista');
        }
    });
    // drop 

    $('#elemento_movido').draggable();
    $('#area').droppable({
        drop: function () {
            console.log("has soltado algo dentro de are");
            $(this).css('background', 'yellow');
        },
        out: function () {
            $(this).css('background', 'none');
        }
    });

    // Efectos
    $('#mostrar').click(function (e) {
        // $('.caja_efecto').toggle('explode');
        //$('.caja_efecto').toggle('slide');
        //$('.caja_efecto').toggle('blind');
        ///$('.caja_efecto').toggle('drop');
        //$('.caja_efecto').toggle('puff');
        //$('.caja_efecto').toggle('escale');
        $('.caja_efecto').toggle('shake', 4000); // con giempo
    });

/* 
======================    widget y plugien Jquery UI ==============
 */
    // tooltip => muestra una caja de texto 
    $(document).tooltip();

    //  dialog => mensaje en caja de texto 
    $('#popup').mouseover(function () {
        $(this).dialog();
    });

    
    //  datepicker () calendario
    $('#calendario').datepicker();

    //  Tabs
    $('#pestanas').tabs();
        


}); // fin de load