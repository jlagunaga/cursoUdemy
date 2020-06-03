/* crear servidor con node js y express 
Configuracion basica para servidor http con io 
*/

var express = require('express'); //  cargamos paquete de express para el usp de HTTP
var app = express(); // llamamos a la funcion expres 
var server = require('http').Server(app) // cargamos el servidor con la libreria HTTP y le pasamos la ap de expres
var io = require('socket.io')(server); // carga modulo de socket y pasamos el "server" indicando que usara socet io

// MidleWare
app.use(express.static('client'));


// creamos una ruta 
app.get('/hola-mundo', function (req, res) {
    res.status(200).send('hola mundo desde una ruta');
});

// evento conection se envia a los clientes// detecta cuando un clientes se conecte
io.on('connection', function (socket) {
    console.log('alguen se ha conectado al socket' + socket.handshake.address);

    socket.emit('message', mensaje) // => enviamos el dato de mensaje

    socket.on('add-mensaje', function (data) {
        mensaje.push(data);

        io.sockets.emit('message', mensaje); //  metodo para enviar mensaje a todos los socket (usuarios)
    })

});


/* indicamos al servidor donde estara escuchando */
server.listen(6677, function () {
    console.log("Servidor esta funcionando en http://localhost:6677");
});



/* +++++++  variables de prueba ++++++ */
var mensaje = [{
    id: 1,
    text: 'Bienvenido al chat privado de socket Io y Node Js de Joseph Laguna',
    nickname: 'El joseph'
}];