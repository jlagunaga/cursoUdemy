'use strict'

window.addEventListener("load",function(){
// *********** JSON ***************
var pelicula={
    titulo: "batman vs Superman",
    año: 2017,
    pais:"Estados Unidos"
};

var  peliculas=[
    {titulo:"Liga de la justicia",año:2018,pais:"estados unidos"},
    pelicula
];

var box=document.querySelector("#boxPeliculas");

for(let indx in peliculas){
    var p=document.createElement("p");
    var objPel=peliculas[indx];
    p.append(objPel.titulo + " - "+ objPel.año);
    box.append(p);
    
};


});// fin de windows Load 
