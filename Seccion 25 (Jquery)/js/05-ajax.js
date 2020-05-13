'use strict'
/* 
Ajax
permite traer datos sin tener que recargar la pagina
 */
$(document).ready(function () {
    console.log("JQery cargado");
    var datos = $('#datos');
    var form = $('#form1');
    var users;

    // Load - Ajax
    // $('#datos').load('https://reqres.in/');

    // Get y Post - Ajax

    // ========= Get
    $.get('https://reqres.in/api/users?', {
            page: '2'
        },
        function (response) {
            console.log(response);
            response.data.forEach((element, index) => {
                $(datos).append('<p>' + element.first_name + ' ' + element.last_name + '</p>');
            });

        });

    // ========= Post
    $(form).submit(function (e) {
        e.preventDefault(); // evita la redireccion del action en el form
        users = {
            name: $('input[name="name"]').val(), // recojemos los datos por la propiedad Name
            job: $('input[name="web"]').val() // recojemos los datos por la propiedad Name
        };
        console.log(users);

        // usamos el Post
        /*         $.post($(this).attr('action'), users,
                    function (response) {
                        console.log(response);
                    }).done(function () { // metodo que se ejecuta cuando el ajax termino satisfactoriamente
                    alert("usuario Añadido correctamente");
                });
         */

        // ================= $Ajax
        $.ajax({
            type: "POST",
            url: "https://reqres.in/api/users",
            data: users,
            dataType: "json",
            beforeSend: function () { // antes de enviar
                console.log("Enviando usuario");
            },
            success: function (response) { // envio exitoso
                console.log(response);
            },
            error: function () {//  error en envio
                console.log("A ocurrido un error ");
            },
            timeout: 2000 // tiempo de espera para respuesta
        });

        return false;
    });



}); // fin de load