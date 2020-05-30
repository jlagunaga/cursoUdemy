$(document).ready(function () {
    console.log("jq Listo");
    var divPost = $('#post');
    var divTheme = $('#theme');

    get_estilo();
    /* 
     *********** funcion de slider para Imagen ***********
     */
    // busca una palabra en la direccion 
    if (window.location.href.indexOf('Index') > -1) {
        $(function () {
            $('.bxslider').bxSlider({
                mode: 'fade',
                captions: true,
                slideWidth: 1200,
                responsive: true
            });
        });

        // se carga estilo por defecto


        // Post
        var posts = [{
                titulo: 'Prueba de titulo 1',
                fecha_publica: moment().format("MMM Do YY"),
                cuerpo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
            },
            {
                titulo: 'Prueba de titulo 2',
                fecha_publica: moment().format("MMM Do YY"),
                cuerpo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
            },
            {
                titulo: 'Prueba de titulo 3',
                fecha_publica: moment().format("MMM Do YY"),
                cuerpo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
            },
            {
                titulo: 'Prueba de titulo 4',
                fecha_publica: moment().format("MMM Do YY"),
                cuerpo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
            },
            {
                titulo: 'Prueba de titulo 5',
                fecha_publica: moment().format("MMM Do YY"),
                cuerpo: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum'
            }
        ];

        posts.forEach(function (item, index) {
            var post = `<article class="post">
                    <h2>${item.titulo}</h2>
                    <span class="date">${item.fecha_publica}</span>
                        <p>${item.cuerpo}</p>
                    <a href="#" class="boton-more">Leer Mas</a>
                    </article>
                    `;
            $(divPost).append(post);

        });
    }


    $('#divGreen').click(function (e) {
        $(divTheme).attr('href', 'css/green.css');
        localStorage.setItem('style', 'css/green.css')
    });
    $('#divBlue').click(function (e) {
        $(divTheme).attr('href', 'css/blue.css');
        localStorage.setItem('style', 'css/blue.css')
    });
    $('#divRed').click(function (e) {
        $(divTheme).attr('href', 'css/red.css');
        localStorage.setItem('style', 'css/red.css')
    });


    function get_estilo() {
        var stilo = localStorage.getItem('style');

        if (stilo != null) {
            $(divTheme).attr('href', stilo);
            console.log(stilo);
        }
    }
    $('.subir').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#login form').submit(function (e) {
        e.preventDefault();
        var forname = $('#usuario').val();
        localStorage.setItem('forname', forname);
        location.reload();
    });

    var forname = localStorage.getItem('forname');
    if (forname != null) {
        var parrafoUss = $('#about p');
        parrafoUss.html('<strong>biemvenido ' + forname + '</strong>');
        $('#login').hide();
        parrafoUss.append(`
        <br>
        <a href="#" id="cerrarCession">Cerrar Cession </a>
        `);
    }
    $('#cerrarCession').click(function (e) {
        e.preventDefault();
        $('#login').show();
        localStorage.removeItem('forname');
        location.reload();
    });

    // acordeon
    if (window.location.href.indexOf('About_Me') > -1) {
        $('#acordeon').accordion();
    }

    //Reloj
    if (window.location.href.indexOf('Reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000);
    }
    if (window.location.href.indexOf('Contacto') > -1) {
        $('form input[name="fechaNac"]').datepicker({
            dateFormat:'dd-mm-yy'
        });
        $.validate({
            lang: 'es'
        });
    }

    

}); // find de ready