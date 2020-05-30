'use strict'

/* fichero de rutas, se recomienda tener la logica de configuracion de las rutas 
    en un fichero adicional que luego sera importado
 */

var expres = require('express');
var ProjectControler = require('../controlers/project');

var ruter = expres.Router();

// =>> aplicamos un midlware que se ejcutara antes de llegar al controller

var multipart = require('connect-multiparty'); // usamos la libreria multiparty
var multpartMiddleware = multipart({
    uploadDir: './upload'
});

// se definen las rutas de modelo Project
ruter.post('/home', ProjectControler.home);
ruter.get('/test', ProjectControler.test);
ruter.post('/save-project', ProjectControler.saveProject);
ruter.get('/project/:id?', ProjectControler.getProject); // '?' indica que la variable ID es opcional
ruter.get('/all-project', ProjectControler.getAll_project);
ruter.put('/project/:id', ProjectControler.updateProyect); // se usa PUT para actualizacions
ruter.delete('/project/:id', ProjectControler.deleteProyect); // se usa delete para borrar
ruter.post('/upload-image/:id', multpartMiddleware, ProjectControler.uploadImage); //se antepone el middleware antes del controles para controlar las imagenes 
ruter.get('/get-image/:image', ProjectControler.getImageFile); // metodo para llamar imagen 

module.exports = ruter;