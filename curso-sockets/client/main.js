// indicamos la direccion del servidor donde esta configurado el socket 
var socket = io.connect('http://192.168.1.183:6677', {
    'forceNew': true
});

// * recoje los datos desde el servidor
socket.on('message', function (data) {
    console.log(data);
    render(data);

});

function render(data) {
    var htm = data.map(function (message, index) {
        return (`
            <div class="message">
            <strong>${message.nickname}</strong> dice:
            <p>${message.text} </p>
            </div>
        `)
    }).join('');
    var divMensaje=document.querySelector('#messages');
    divMensaje.innerHTML = htm;
    divMensaje.scrollTop=divMensaje.scrollHeight; // metodo para agregar scroll y colocar en el final 
}



// funcion para envio de texto

function addmensaje(e) {
    var nick = document.querySelector('#nickname');
    var texto=document.querySelector('#Mensaje');

    var message = {
        nickname: nick.value,
        text: texto.value
    }
    nick.style.display='none';
    texto.value='';
    console.log(message);
    socket.emit('add-mensaje', message);
    return false;
}