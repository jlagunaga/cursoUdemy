'use strict'
/*configuracion para  conectar con la BD de mongo DB */
var mongose = require('mongoose');

var app =require('./app');
var port =3800;

mongose.Promise = global.Promise;

mongose.connect('mongodb://localhost:27017/portafolio',{ useUnifiedTopology: true,useFindAndModify: false,findOneAndDelete:false})
    // ya que se trata de una promesa, podemos ejecutar then para camturar los resultados 
    .then(() => {
        console.log("Conexion a Base MongoDB exitosa...");
        /* creamos el servidor de node */
        app.listen(port,()=>{
            console.log("Servidor Iniciado correctamente en la url...localhost:3800");
        });

    }).catch(err => console.log(err));
    