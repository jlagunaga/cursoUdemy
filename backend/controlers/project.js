'use strict'
/* esta clase se encarga de almacenar las acciones que se realizaran con funciones 
    y estaran relacionadas las vistas 
*/

var Project = require('../models/project');
var fs =require('fs'); //  modulo para trabajar con archivos
var path=require('path'); // modulo de js que permite cargar rutas fisicas del sistema de archivos

var controler = {
    home: function (req, res) {
        let nombre = req.body.nombre; // para los metodos post y datos enviado en el body 
        let apellido = req.body.apellido; // para los metodos post y datos enviado en el body 
        console.log(req.query.web); // para los metodos Post los datos enviado por la url
        console.log(req.params.id); //usa params para los metodos Post con variable obligatorio definida en la ruta post o get
        res.status(200).send(
            '<h1>Soy la Home</h1>'
        );
    },
    test: function (req, res) {
        res.status(200).send({ // estatus(200) significa respuesta exitosa
            message: 'Soy la Test'
        });
    },
    saveProject: function (req, res) {
        var objProject = new Project();
        var body = req.body;
        objProject.name = body.name;
        objProject.description = body.description;
        objProject.category = body.category;
        objProject.langs = body.langs;
        objProject.year = body.year;
        objProject.image = body.image;

        objProject.save((err, projectStore) => {
            if (err) return res.status(500).send({
                message: "Error al guardar el documento"
            });
            if (!projectStore) return res.status(400).send({
                message: "No se pudo guardar el documento"
            });
            return res.status(200).send({
                project: projectStore
            });
        });
    },
    getProject: function (req, res) {
        var projectID = req.params.id;

        if (projectID == null) {
            return res.status(400).send({
                message: 'proyecto no existe '
            });
        }
        // usamos la instancia de modelo Project (mongoose), para realizar la busqueda
        Project.findById(projectID, (err, objProject) => {
            if (err) return res.status(500).send({
                message: 'error en la devolucion de datos '
            });
            if (!objProject) return res.status(400).send({
                message: 'proyecto no existe '
            });
            return res.status(200).send({
                objProject
            });
        });
    },
    getAll_project: function (req, res) {
        // find({}) devuelve todos los documentos de la coleccion 
        Project.find({}).exec((err, objAllProject) => {
            if (err) return res.status(500).send({
                message: 'Error al devolver los datos'
            });
            if (!objAllProject) return res.status(404).send({
                message: 'No hay proyectos que mostrar'
            });
            return res.status(200).send({
                objAllProject
            })
        });
    },
    updateProyect: function (req, res) {
        var projectID = req.params.id;
        var update = req.body;
        // se agrega {new:true} para que el valor devuelto en res sea con la informacion actualizada 
        Project.findByIdAndUpdate(projectID, update, {
            new: true
        }, (err, projectUpdate) => {
            if (err) return res.status(500).send({
                message: 'error al actualizar'
            });
            if (!projectUpdate) return res.status(404).send({
                message: 'no esiste el proyecto para la actualizacion'
            });
            return res.status(200).send({
                projectUpdate
            });
        });
    },
    deleteProyect: function (req, res) {
        var projectID = req.params.id;
        Project.findByIdAndRemove(projectID, (err, projectDelete) => {
            if (err) return res.status(500).send({
                message: 'No se ha podido Borrar el Proyecto'
            });
            if (!projectDelete) return res.status(404).send({
                message: 'no es posible borrar: el Proyecto no existe'
            });
            return res.status(200).send({
                projectDelete
            });
        });
    },
    uploadImage: function (req, res) {
        var projectId = req.params.id;
        // comprobamos si existe archivo
        if (req.files) {
            var filePath = req.files.image.path;
            var fileSplit = filePath.split('\\');
            var fileName = fileSplit[1];
            var extSplit = fileName.split('.');
            var fileExt = extSplit[1];
            // filtramos que solo los datos de tipo imagen sean admitidas 
            if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'|| fileExt == 'JPG') {
                Project.findByIdAndUpdate(projectId, {
                    image: fileName
                }, {
                    new: true
                }, (err, objUpdate) => {
                    if (err) return res.status(500).send({
                        messaje: 'error en la carga de imagen'
                    });
                    if (!objUpdate) return res.status(404).send({
                        message: 'objeto para modificacion no encontrado'
                    });
                    res.status(200).send({
                        objUpdate
                    });
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(200).send({message:'la extencion del archivo no es permitida'});
                });

            }
        } else {
            res.status(200).send({
                message: 'no se encontro el req.files',
            });
        }
    },
    getImageFile: function(req,res){
        var file=req.params.image
        var path_file='./upload/'+file;
        fs.exists(path_file,(exists)=>{
            if(exists){
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({
                    message:'no existe la imagen'
                });
            }
        })
    }

} // fin de controler

module.exports = controler;