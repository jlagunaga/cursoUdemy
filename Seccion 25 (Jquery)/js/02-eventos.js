'use strict'
$(document).ready(function () {
    console.log("Jq Cargado");


    $('#caja').mouseover(function () {
        $(this).css('background', 'red');
    });


    $('#caja').mouseout(function () {
        $(this).css('background', 'green');
    });

    // evento click 
    $('#caja').click(function () {
        $(this).css('background', 'blue')
            .css('color', 'white');
    });
    $('#caja').dblclick(function () {
        $(this).css('background', 'pink')
            .css('color', 'wellow');
    });

    // focus - blur
    var nombre = $('#nombre');
    var datos = $('#datos');

    nombre.focus(function () {
        $(this).css('border', '2px solid green');
    });

    nombre.blur(function () {
        $(this).css('border', '1px solid #ccc');
        datos.text($(this).val()).show();
    });

    // mouse down  - mouse up

    datos.mousedown(function () {
        $(this).css('border-color', 'gray');
    });

    datos.mouseup(function () {
        $(this).css('border-color', 'balck');
    });

    //  mouse move
    var figura1 = $('#sigueme');
    $(document).mousemove(function () {
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        console.log(event.clientX + " : " + event.clientY);
        figura1.css('left',event.clientX); // eje X
        figura1.css('top',event.clientY); // eje X
    });

}); // fin de load