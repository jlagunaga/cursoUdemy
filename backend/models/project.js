'use strict'
/* se crea el modelo => logica del negocio o conexion a la base de datos  */


// para usar mongoDB usrarmos el objero mongoose
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

// definimos el esquema con el modelo de los compnentetes BD
var ProjectSchema=Schema({
    name:String,
    description:String,
    category:String,
    langs:String,
    year:Number,
    image:String

});

// declaramos module.exports para poder exportar nuestra clase 
module.exports=mongoose.model('proyect',ProjectSchema);
/*  projects=> es el nombre de entidad en DB ,
 mongo la trasnforma en plural, de existir agrega datos de no existir crea la entidad  */