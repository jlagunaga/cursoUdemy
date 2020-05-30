'use strict'

// configuracion para el servidor 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//***  cargar archivos de rutas

var project_rutes=require('./rutes/project');

//*** Cors 
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//***  middlewares (codigo que se ejecuta antes de la rspuesta a la peticion post o get)
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json()); // => le decimos que conviera a json la informacion que se reciba


//***  Rutas
app.use('/',project_rutes); // se puede anteponer una referencia a la ruta ejemp: '/api'

//***  Exports
module.exports = app;